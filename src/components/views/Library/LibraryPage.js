import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './App.css';
import Bookshelf from "./Bookshelf";
import Search from "./Search";

function LibraryPage() {
    const navigate = useNavigate();

    const [shelves, setShelves] = useState([{_id: "", books: []}]) // list of bookshelf

    useEffect(() => {
        axios.get('/api/shelf')
            .then((response) => response.data.shelves)
            .then((shelves) => setShelves(shelves));
    }, [])

    const onLogoutHandler = () => {
        axios.get('/api/user/logout')
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    navigate('/');
                } else {
                    alert('Failed to Logout.')
                }
            });
    }

    return (
        <div className="App">
            <header className="App-Header">
                <img src="/image/handshelf.png" width="150px" />
                <button id="logoutButton" onClick={onLogoutHandler}>LOGOUT</button>
            </header>

            <div className="Library">
                {/*
                <select id="selectBookshelf" onChange={(e) => setCurrBookshelf(e.target.value)}>
                    <option value="Basic" selected="selected">Basic</option>
                    <option value="Novel">Novel</option>
                    <option value="Study">Study</option>
                </select>
                */}

                {/* TODO: multipule bookshelves */}
                <Bookshelf key={shelves[0]._id} shelf={shelves[0]}/>
                {/* TODO: <Search /> */}
            </div>
        </div>
    )
}

export default LibraryPage;
