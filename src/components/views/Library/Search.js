import React, { useState, useRef } from "react";
import axios from 'axios';
import { parseString } from 'xml2js'
import './App.css';
import Book from "./Book";
import Bookshelf from "./Bookshelf";

function Search(props) {
    const MAX = 5 // maximum size of each bookshelf

    const [query, setQuery] = useState("") // search query
    const [books, setBooks] = useState([]) // search result
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("") // error message

    const bookId = useRef(0) // id of results

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
            {/* search books */}
            <div className="inputQuery">
                <input className="query"
                    type="text" placeholder="Enter the name of the book."
                    value={query} onChange={(e) => { setQuery(e.target.value) }}
                    onKeyPress={(e) => { if (e.key === "Enter") searchQuery() }}>
                </input>
                <button className="queryBtn" onClick={searchQuery}>Search</button>

                <div className="searchResult">
                    {
                        isLoading ?
                            books.map(book =>
                                <Book key={bookId.current++}
                                    bookInfo={book} onSaveBMemo={props.onSaveBMemo}>
                                </Book>)
                            : message
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;
