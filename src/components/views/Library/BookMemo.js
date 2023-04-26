import React, { useState } from "react";
import './App.css';
import MemoModal from "./MemoModal";
import axios from "axios";

export default function BookMemo(props) {
    const { title, image, _id } = props.bookInfo;
    const [memo, setMemo] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        
        // save content
        const reqData = {
            shelfId: props.shelfId,
            bookId: _id,
            content: memo,
        }
        axios.put('/api/book', reqData)
    };

    return (
        <div className="Shelf">
            <img id="BookImg" src={image} onClick={openModal} />
            <button className="RemoveButton" onClick={() => props.onRemoveBMemo(_id)}>
                <img src="/image/remove.png" width="25px"></img>
            </button>
            <MemoModal open={modalOpen} close={closeModal} header={title}>
                <textarea className="memo"
                    placeholder="Why is this book memorable?"
                    value={memo} onChange={(e) => { setMemo(e.target.value) }}>
                </textarea>
            </MemoModal>
        </div>
    )

}