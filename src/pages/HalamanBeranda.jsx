import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PostinganList } from '../components/cardList/PostinganList'
import { AddPostingan } from '../components/button/AddPostingan'
function HalamanBeranda() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='mx-auto'>
                <PostinganList />
            </div>
            <AddPostingan />
        </div>

    )
}

export { HalamanBeranda }