import React, { useState, useRef } from "react";
import axios from 'axios';
import {parseString} from 'xml2js'
import './App.css';
import Book from "./Book";
import Bookshelf from "./Bookshelf";

function SearchPage() {
    const MAX = 5 // maximum size of each bookshelf

    const [query, setQuery] = useState("") // search query
    const [books, setBooks] = useState([]) // search result
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("") // error message

    const bookId = useRef(0) // id of results

    const [current, setCurrent] = useState("Basic") // name of current bookshelf
    const [bookImgs, setBookImgs] = useState([{ id: current, imgs: [] }]) // images of bookshelves

    // change bookshelf
    const setBookshelf = (e) => {
        setCurrent(e.target.value)

        // init
        if (bookImgs.find((src) => src.id === e.target.value) == undefined) {
            let newData = { id: e.target.value, imgs: [] }
            setBookImgs((imgs) => [...imgs, newData])
        }
    }

    const setBookImgsCallBack = (img) => {
        let oldData = bookImgs.find((src) => src.id == current)

        // add books until MAX
        if (oldData.imgs.length != MAX) {
            let newData = { id: current, imgs: [...oldData.imgs, img] }
            let tmpList = bookImgs.map((src) =>
                current === src.id ? { ...src, ...newData } : src)
            setBookImgs(tmpList);
        }
    }

    const searchQuery = async () => {
        // Naver API
        const URL = '/v1/search/book.xml'
        const SEARCH_KEY = {
            'X-Naver-Client-Id': process.env.REACT_APP_NAVER_ID,
            'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET,
        }

        if (query !== "") {
            await axios.get(URL, {
                params: { query: query, display: 5 },
                headers: SEARCH_KEY
            }).then(function (response) {
                // handle success
                parseString(response.data,
                    function (err, result) {
                        if (result.rss.channel[0].total == 0) {
                            setIsLoading(false)
                            setMessage("No results.")
                        }
                        else {
                            setBooks(result.rss.channel[0].item)
                            setIsLoading(true)
                            setMessage("")
                        }
                    }
                );
            }).catch(function (error) {
                //handle error
                setIsLoading(false)
                setMessage("API Error")
                console.log(error.config);
            });
        }
    }

    return (
        <div className="App">
            <header className="App-Header">
                <p>MY BOOKSHELF</p>
                <select id="selectBookshelf" onChange={(e) => setBookshelf(e)}>
                    <option value="Basic" selected="selected">Basic</option>
                    <option value="Novel">Novel</option>
                    <option value="Study">Study</option>
                </select>

                <Bookshelf imgSrcs={bookImgs.find((src) => src.id == current)}/>

                {/* search books */}
                <div className="inputQuery">
                    <input className="query"
                        type="text" placeholder="Enter the name of the book."
                        value={query} onChange={(e) => { setQuery(e.target.value) }}
                        onKeyPress={(e) => { if (e.key === "Enter") searchQuery() }}>
                    </input>
                    <button className="queryBtn" onClick={searchQuery}>Search</button>

                    <h5>RESULTS</h5>
                    <hr></hr>
                    <div className="searchResult">
                        {
                            isLoading ?
                                books.map(book =>
                                    <Book key={bookId.current++}
                                        bookInfo={book} select={setBookImgsCallBack}>
                                    </Book>)
                                : message
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SearchPage;