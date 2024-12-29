import { Button } from '@material-tailwind/react'
import React from 'react'
function TombolFollow({ warna, label, handler }) {
    return (
        <Button size='sm' color={warna} onClick={() => console.log("follow")} className='hover:bg-blue-700'>{label}</Button>
    )
}

export { TombolFollow }