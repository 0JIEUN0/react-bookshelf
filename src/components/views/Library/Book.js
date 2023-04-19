import React from "react";
import './App.css';

function Book(props) {
    // use callback function from parent
    // to get a image of the book
    const onBookSeleted = () => {
        props.onSaveBMemo(props.bookInfo)
    }

    // remove tag
    const title = props.bookInfo.title.toString().replace(/(<([^>]+)>)/ig, "")
    const author = props.bookInfo.author.toString().replace(/(<([^>]+)>)/ig, "")

    return (
        <div className="Book">
            <div className="BookResultWrap">
                <img id="BookResultImg" src={props.bookInfo.image} />
                <a href='#' onClick={onBookSeleted}><img src="/image/plus.png" width="40px"/></a>
            </div>
            <div className="BookInfo">
                <span className="BookTitle">{title}</span><br></br>
                <span className="BookDetails">
                    {author} / {props.bookInfo.price} / {props.bookInfo.link}
                </span>
            </div>
        </div>
    )
}

export default Book;
