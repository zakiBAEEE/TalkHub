import React from 'react'
import { FaSquarePlus } from 'react-icons/fa6'
function TombolBuat({ namaTombol }) {
    return (
        <div className='flex gap-1 rounded-sm bg-blue-gray-200 items-center p-1 cursor-pointer hover:bg-blue-gray-300'>
            <FaSquarePlus />
            {namaTombol}
        </div>
    )
}

export { TombolBuat }