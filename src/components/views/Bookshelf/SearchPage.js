import React, { useState, useRef } from "react";
import './App.css';

function SearchPage() {
    // Seleted Book Image Src 
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

    return (
        <div className="App">
            <header className="App-Header">
                <p>MY BOOKSHELF</p>
                <select id="selectBookshelf" onChange={(e) => setBookshelf(e)}>
                    <option value="Basic" selected="selected">Basic</option>
                    <option value="Novel">Novel</option>
                    <option value="Study">Study</option>
                </select>
            </header>
        </div>
    )
}

export default SearchPage;
