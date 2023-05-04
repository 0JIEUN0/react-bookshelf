import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { searchBook } from '../../../_actions/book_action';
import './App.css';
import Book from "./Book";
import Bookshelf from "./Bookshelf";

function Search(props) {
    const dispatch = useDispatch();
    const MAX = 5 // maximum size of each bookshelf

    const [query, setQuery] = useState("") // search query
    const [books, setBooks] = useState([]) // search result
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("") // error message

    const bookId = useRef(0) // id of results

    const searchQuery = async () => {
        if (query !== "") {
            dispatch(searchBook(query))
                .then(response => {
                    console.log(response)
                    if (response.payload.success) {
                        setBooks(response.payload.books);
                        setIsLoading(true)
                    } else {
                        setMessage(response.payload.message);
                        setIsLoading(false)
                    }
                })
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
                <button className="queryBtn" onClick={searchQuery}>
                    <img src="/image/search.png" width="40px" />
                </button>
            </div>
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
    )
}

export default Search;
