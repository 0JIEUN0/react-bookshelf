import React, { useEffect, useState } from "react";
import './App.css';
import Search from "./Search";
import BookMemo from "./BookMemo";
import axios from "axios";

function Bookshelf(props) {
    const MAX = 5
    const shelfId = props.shelf._id;
    const [booklist, setBooklist] = useState(props.shelf.books);

    const onSaveBMemo = (bookInfo, isbn) => {
        if (booklist.findIndex((src) => src.isbn == isbn) === -1) {
            // don't add duplicated book
            const reqData = {
                shelfId: shelfId,
                bookInfo: bookInfo,
            }
            axios.post('/api/book', reqData)
                .then(response => response.data)
                .then(response => {
                    bookInfo._id = response.bookId;
                    setBooklist([...booklist, bookInfo]);
                });
        }
    }

    const onRemoveBMemo = (bookId) => {
        setBooklist(booklist.filter((book) => book._id !== bookId));
        axios.delete(`/api/book/${shelfId}/${bookId}`);
    }

    return (
        <div>
            <div className="Bookshelf">
                {
                    booklist.map((bookInfo) =>
                        <BookMemo
                            key={bookInfo._id}
                            bookInfo={bookInfo}
                            onRemoveBMemo={onRemoveBMemo}
                            shelfId={shelfId}
                        />
                    )
                }
                {
                    (function () {
                        if (booklist.length < MAX) {
                            const dummy = [];
                            for (var i = booklist.length; i < MAX; i++) {
                                dummy.push(<div id="BookImgEmpty" />)
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
