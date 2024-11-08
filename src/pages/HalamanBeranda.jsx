import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PostinganList } from '../components/cardList/PostinganList'
function HalamanBeranda() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='mx-auto'>
                <PostinganList />
            </div>

        </div>


    )
}

export { HalamanBeranda }