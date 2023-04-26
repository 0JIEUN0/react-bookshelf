import React, { useEffect, useState } from "react";
import './App.css';
import Search from "./Search";
import BookMemo from "./BookMemo";
import axios from "axios";

function Bookshelf(props) {
    const MAX = 5
    
    const [booklist, setBooklist] = useState(props.shelf.books);
    
    const onSaveBMemo = (bookInfo, isbn) => {
        if (booklist.findIndex((src) => src.isbn == isbn) === -1) {
            // don't add duplicated book
            const reqData = {
                shelfId: props.shelf._id,
                bookInfo: bookInfo,
            }
            const response = axios.post('/api/book', reqData)
                .then(response => response.data);
            bookInfo.bookId = response.bookId;
            setBooklist([...booklist, bookInfo]);
        }
    }

    const onRemoveBMemo = (bookId) => {
        setBooklist(booklist.filter((book) => book.bookId !== bookId));
    }

    return (
        <div>
            <div className="Bookshelf">
                {
                    booklist.map((bookInfo) =>
                        <BookMemo
                            key={bookInfo.bookId}
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
