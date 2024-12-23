import React from 'react'
import { FaSquarePlus } from 'react-icons/fa6'
function TombolBuat({ namaTombol }) {
    return (
        <div className='flex gap-1 rounded-sm bg-gray-400 items-center p-1'>
            <FaSquarePlus />
            {namaTombol}
        </div>
    )
}

export { TombolBuat }