import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CardComentar } from '../card/CardComentar'
import { AddComentar } from '../form/AddComentar'

function ComentarList({ comentars }) {
    return (
        <div className=''>
            {/* {
            comentars.map((comentar) => {
                return <CardComentar komentar={comentar.komentar} likes={comentar.likes} dislikes={comentar.dislikes} penggunaId={comentar.penggunaId} key={comentar.id} />
            })
        } */}

            <Typography variant='h6' className="mb-2 px-4">Komentar</Typography>
            <AddComentar />
            <div className=' h-[1px] bg-blue-gray-600'></div>
            <CardComentar />
            <CardComentar />
            <CardComentar />
        </div>
    )

}

export { ComentarList }