import React from 'react'
import { CardComentar } from './CardComentar'
import { Typography } from '@material-tailwind/react'

function ComentarList({ comentars }) {
    return (
        <div className='w-[44rem] bg-white'>
            {/* {
            comentars.map((comentar) => {
                return <CardComentar komentar={comentar.komentar} likes={comentar.likes} dislikes={comentar.dislikes} penggunaId={comentar.penggunaId} key={comentar.id} />
            })
        } */}

            <Typography variant='h6' className="mb-2">Komentar</Typography>
            <div className='w-[44rem] h-[1px] bg-blue-gray-900'></div>
            <CardComentar />
            <CardComentar />
            <CardComentar />
        </div>
    )

}

export { ComentarList }