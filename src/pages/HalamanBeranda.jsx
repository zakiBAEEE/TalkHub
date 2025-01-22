// eslint-disable-next-line no-unused-vars
import React from 'react'
import { PostinganList } from '../components/cardList/PostinganList'
import TambahPostingan from '../components/modal box/TambahPostingan'
function HalamanBeranda() {
    return (
        <div className='flex flex-col'>
            <div className=' mx-auto'>
                <PostinganList />
            </div>
            <TambahPostingan />
        </div>
    )
}

export { HalamanBeranda }