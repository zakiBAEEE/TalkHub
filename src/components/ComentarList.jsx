import React from 'react'
import { CardComentar } from './CardComentar'
import { Typography } from '@material-tailwind/react'
import { AddComentar } from './AddComentar'

function ComentarList({ comentars }) {
    return (
        <div className=''>
            {/* {
            comentars.map((comentar) => {
                return <CardComentar komentar={comentar.komentar} likes={comentar.likes} dislikes={comentar.dislikes} penggunaId={comentar.penggunaId} key={comentar.id} />
            })
        } */}

            <Typography variant='h6' className="mb-2">Komentar</Typography>
            <AddComentar className='w-full' />
            <div className=' h-[1px] bg-blue-gray-600'></div>
            <CardComentar />
            <CardComentar />
            <CardComentar />
        </div>
    )

}

export { ComentarList }