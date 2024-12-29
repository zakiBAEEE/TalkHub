import React from 'react'
import { FaSquarePlus } from 'react-icons/fa6'
function TombolBuat({ namaTombol, handler }) {
    return (
        <div className='flex gap-1 w-[7rem] rounded-md bg-blue-gray-200 items-center p-1 cursor-pointer hover:bg-blue-gray-300' onClick={handler}>
            <FaSquarePlus />
            {namaTombol}
        </div>
    )
}
export { TombolBuat }