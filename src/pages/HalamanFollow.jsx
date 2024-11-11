import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'

function HalamanFollow() {
    return (
        <div className='flex bg-blue-gray-50 min-h-[100vh]'>
            <Sidebar />
            <div className='mx-auto'>
                <PenggunaList />
            </div>
        </div>
    )
}

export { HalamanFollow }