import React from "react";
import './App.css';

function Book(props) {
    // use callback function from parent
    // to get a image of the book
    const onBookSeleted = () => {
        props.select({ img: props.bookInfo.image })
    }

    // remove tag
    const title = props.bookInfo.title.toString().replace(/(<([^>]+)>)/ig, "")
    const author = props.bookInfo.author.toString().replace(/(<([^>]+)>)/ig, "")

    return (
        <div className="Book">
            <img id="BookImgResult" src={props.bookInfo.image} onClick={onBookSeleted} />
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
