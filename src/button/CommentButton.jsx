import React from 'react'
import { FaComment } from "react-icons/fa";
function CommentButton({ jumlahComment, postinganId, onClickHandler }) {
    return (
        <div className="flex gap-1">
            <button onClick={() => { onClickHandler(postinganId) }}><FaComment /></button>
            <p>12</p>
        </div>
    )
}

export { CommentButton }