import React, { useState } from "react";
import './App.css';
import Search from "./Search";

function Bookshelf(props) {
    const MAX = 5

    const [booklist, setBooklist] = useState([])

    const onSaveBMemo = (bookInfo) => {
        if (booklist.indexOf(bookInfo.isbn) === -1) {
            // don't add duplicated book
            setBooklist([...booklist, bookInfo]);
        }
    }

    const onRemoveBMemo = (bookISBN) => {
        setBooklist(booklist.filter((book) => book.isbn !== bookISBN));
    }

    return (
        <div className="Bookshelf">
            {
                booklist.map((bookInfo) => <img id="BookImg" src={bookInfo.image} />)
            }
            {
                (function () {
                    if (booklist.length < 5) {
                        return <img id="BookImg" />
                    }
                }
                )()
            }
            <Search onSaveBMemo={onSaveBMemo} />
        </div>
    )
}

export default Bookshelf;
