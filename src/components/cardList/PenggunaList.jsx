import React from 'react'
import { CardPengguna } from '../card/CardPengguna'

function PenggunaList(Penggunas) {
    {/* {
            Penggunas.map((Pengguna) => {
                return <CardPengguna/>
            })
        } */}
    return (
        <div className='flex w-full flex-wrap justify-start gap-4'>
            <CardPengguna />
            <CardPengguna />
            <CardPengguna />
            <CardPengguna />
            <CardPengguna />
            <CardPengguna />
            <CardPengguna />
        </div>
    )
}

export { PenggunaList }