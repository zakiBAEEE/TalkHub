import React from 'react'
import { CardPostingan } from '../card/CardPostingan'
function PostinganList({ postingans }) {
    return (
        <div className='flex flex-col gap-5 mt-7'>
            {/* {
            postingans.map((postingan) => {
                return <CardPostingan komentar={comentar.komentar} likes={comentar.likes} dislikes={comentar.dislikes} penggunaId={comentar.penggunaId} key={comentar.id} />
            })
        } */}
            <CardPostingan />
            <CardPostingan />
        </div>
    )

}

export { PostinganList }