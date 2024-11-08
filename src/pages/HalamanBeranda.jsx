import React from 'react'
import { CardPostingan } from '../components/card/CardPostingan'
import { Sidebar } from '../components/sidebar/Sidebar'
function HalamanBeranda() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='mx-auto'>
                <CardPostingan />
                <CardPostingan />
            </div>

        </div>


    )
}

export { HalamanBeranda }