// eslint-disable-next-line no-unused-vars
import React from 'react'
import { PostinganList } from '../components/cardList/PostinganList'
import TambahPostingan from '../components/modal box/TambahPostingan'
function HalamanBeranda() {
    return (
        <>
            <div className='mx-auto'>
                <PostinganList />
            </div>
            <TambahPostingan />
        </>
    )
}

export { HalamanBeranda }