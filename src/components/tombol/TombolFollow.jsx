import { Button } from '@material-tailwind/react'
import React from 'react'
function TombolFollow({ warna, label, handler }) {
    return (
        <Button color={warna} onClick={() => console.log("follow")}>{label}</Button>
    )
}

export { TombolFollow }