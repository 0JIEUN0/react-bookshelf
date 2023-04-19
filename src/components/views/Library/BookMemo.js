import React, { useState } from "react";
import './App.css';
import MemoModal from "./MemoModal";

export default function BookMemo(props) {
    const { title, image, isbn } = props.bookInfo;
    console.log(props.bookInfo)

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
                Write book report.
            </MemoModal>
        </div>
    )

}