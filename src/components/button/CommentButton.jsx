import React from 'react'
import { FaComment } from "react-icons/fa";

function CommentButton({ jumlahComment, onClickHandler }) {
    return (
        <div className="flex gap-1">
            <button onClick={onClickHandler}><FaComment /></button>
            <p>12</p>
        </div>
    )
}

export { CommentButton }