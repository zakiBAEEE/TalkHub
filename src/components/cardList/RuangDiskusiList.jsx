import React from 'react'
import { CardRuangDiskusi } from '../card/CardRuangDiskusi'
import { Separator } from '../separator/separator'


function RuangDiskusiList({ namaTab }) {
    {/* {
            Penggunas.map((Pengguna) => {
                return <CardPengguna/>
            })
        } */}
    return (
        <>
            <Separator namaSeparator={"Teknologi"} />
            <div className='flex w-full flex-wrap justify-start gap-4 mt-4'>
                <CardRuangDiskusi />
                <CardRuangDiskusi />
            </div>
        </>

    )
}

export { RuangDiskusiList }