import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
function LikeButton({ jumlahLikes, onClickHandler }) {
    return (
        <div className="flex gap-1">
            <button onClick={onClickHandler}><FaThumbsUp /></button>
            <p>{jumlahLikes}</p>
        </div>
    )
}

export { LikeButton }