import React from 'react'
import { FaThumbsDown } from "react-icons/fa";
function DislikeButton({ jumlahDislikes, onClickHandler }) {
    return (
        <div className="flex gap-1">
            <button onClick={onClickHandler}><FaThumbsDown /></button>
            <p>{jumlahDislikes}</p>
        </div>
    )
}

export { DislikeButton }