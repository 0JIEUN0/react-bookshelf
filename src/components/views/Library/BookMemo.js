import React, { useState } from "react";
import './App.css';
import MemoModal from "./MemoModal";

export default function BookMemo(props) {
    const { title, image, isbn } = props.bookInfo;
    const [memo, setMemo] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="Shelf">
            <img id="BookImg" src={image} onClick={openModal} />
            <button className="RemoveButton" onClick={() => props.onRemoveBMemo(isbn)}>
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