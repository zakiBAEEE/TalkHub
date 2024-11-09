
import React from 'react'
import { FaSquarePlus } from 'react-icons/fa6'

function AddPostingan({ onClickHandler }) {
    return (<button className='fixed top-5 right-40' onClick={onClickHandler}>
        <FaSquarePlus className='w-8 h-8' />
    </button>
    )
}

export { AddPostingan }