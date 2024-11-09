import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PostinganList } from '../components/cardList/PostinganList'
import TambahPostingan from '../components/modal box/TambahPostingan'
function HalamanBeranda() {
    return (
        <div className='flex bg-blue-gray-50 min-h-[100vh]'>
            <Sidebar />
            <div className='mx-auto'>
                <PostinganList />
            </div>
            <TambahPostingan />
        </div>
    )
}

export { HalamanBeranda }