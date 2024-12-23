import React from 'react'
import { CardRuangDiskusi } from '../card/CardRuangDiskusi'


function RuangDiskusiList(Penggunas) {
    {/* {
            Penggunas.map((Pengguna) => {
                return <CardPengguna/>
            })
        } */}
    return (
        <div className='flex w-full flex-wrap justify-start gap-4 mt-7'>
            <CardRuangDiskusi />
            <CardRuangDiskusi />
        </div>
    )
}

export { RuangDiskusiList }