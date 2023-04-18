import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './App.css';
import Bookshelf from "./Bookshelf";
import Search from "./Search";

function LibraryPage() {
    const navigate = useNavigate();

    const [currBookshelf, setCurrBookshelf] = useState("Basic") // name of current bookshelf

    const onLogoutHandler = () => {
        axios.get('/api/user/logout')
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    navigate('/login');
                } else {
                    alert('Failed to Logout.')
                }
            });
    }

    return (
        <div className="App">
            <header className="App-Header">
                <p>MY BOOKSHELF</p>
                <button id="logoutButton" onClick={onLogoutHandler}>LOGOUT</button>
            </header>

            <div className="Library">
                <select id="selectBookshelf" onChange={(e) => setCurrBookshelf(e.target.value)}>
                    <option value="Basic" selected="selected">Basic</option>
                    <option value="Novel">Novel</option>
                    <option value="Study">Study</option>
                </select>

                <Bookshelf key={currBookshelf} />
                {/* TODO: <Search /> */}
            </div>
        </div>
    )
}

export default LibraryPage;
