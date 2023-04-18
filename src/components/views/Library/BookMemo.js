import React from "react";
import './App.css';

export default function BookMemo(props) {
    return (
        <div className="BookMemo">
            <img id="BookImg" src={props.bookInfo.image} />
            <button className="RemoveButton" onClick={() => props.onRemoveBMemo(props.bookInfo.isbn)}>
                <img src="/image/remove.png" width="25px"></img>
            </button>
        </div>
    )

}