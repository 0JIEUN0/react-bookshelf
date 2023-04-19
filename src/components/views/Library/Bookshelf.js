import React, { useState } from "react";
import './App.css';
import Search from "./Search";
import BookMemo from "./BookMemo";

function Bookshelf(props) {
    const MAX = 5

    const [booklist, setBooklist] = useState([])

    const onSaveBMemo = (bookInfo) => {
        if (booklist.findIndex((src) => src.isbn == bookInfo.isbn) === -1) {
            // don't add duplicated book
            setBooklist([...booklist, bookInfo]);
        }
    }

    const onRemoveBMemo = (bookISBN) => {
        setBooklist(booklist.filter((book) => book.isbn !== bookISBN));
    }

    return (
        <div>
            <div className="Bookshelf">
                {
                    booklist.map((bookInfo) =>
                        <BookMemo
                            key={bookInfo.isbn}
                            bookInfo={bookInfo}
                            onRemoveBMemo={onRemoveBMemo}
                        />
                    )
                }
                {
                    (function () {
                        if (booklist.length < MAX) {
                            const dummy = [];
                            for (var i = booklist.length; i < MAX; i++) {
                                dummy.push(<div id="BookImg" />)
                            }
                            return dummy;
                        }
                    }
                    )()
                }
            </div>
            
            <Search onSaveBMemo={onSaveBMemo} />
        </div>
    )
}

export default Bookshelf;
