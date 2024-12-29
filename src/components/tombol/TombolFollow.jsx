import React from 'react'
function TombolFollow({ warna, label, handler }) {
    return (
        <Button color={warna} onClick={handler}>{label}</Button>
    )
}

export { TombolFollow }