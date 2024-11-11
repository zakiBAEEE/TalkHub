import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'
import { TabsFollow } from '../components/tabs/TabsFollow'

function HalamanFollow() {
    return (
        <div className='flex bg-blue-gray-50 min-h-[100vh] '>
            <Sidebar />
            <div className='mx-auto flex-grow'>
                {/* <PenggunaList /> */}
                <TabsFollow />
            </div>
        </div>
    )
}

export { HalamanFollow }


