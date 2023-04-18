import React from "react";
import './App.css';

function Bookshelf(props) {
    const MAX = 5
    const numberOfBook = props.imgSrcs.imgs.length
    return (
        <div className="Bookshelf">
            {
                props.imgSrcs.imgs.map((src) => <img id="BookImg" src={src.img} />)
            }
            {
                (function () {
                    if (numberOfBook < 5) {
                        return <img id="BookImg" />
                    }
                }
                )()
            }
        </div>
    )
}

export default Bookshelf;
