import React, { useState } from "react";
import './App.css';
import Bookshelf from "./Bookshelf";
import Search from "./Search";

function LibraryPage() {
    const [currBookshelf, setCurrBookshelf] = useState("Basic") // name of current bookshelf

    return (
        <div className="App">
            <header className="App-Header">
                <p>MY BOOKSHELF</p>
                <select id="selectBookshelf" onChange={(e) => setCurrBookshelf(e.target.value)}>
                    <option value="Basic" selected="selected">Basic</option>
                    <option value="Novel">Novel</option>
                    <option value="Study">Study</option>
                </select>

                <Bookshelf key={currBookshelf} />
                {/* TODO: <Search /> */}

            </header>
        </div>
    )
}

export default LibraryPage;
