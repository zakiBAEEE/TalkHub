import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'
import { TabsFollow } from '../components/tabs/TabsFollow'

class HalamanFollow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cariPengguna'
        }
    }

    onChangeTabsAktif(value) {
        this.setState(() => {
            return {
                tabsAktif: value
            }
        })
    }
    render() {
        return (
            <div className='flex bg-blue-gray-50 min-h-[100vh] ' >
                <Sidebar />
                <div className='mx-auto flex-grow'>
                    <TabsFollow />
                    <PenggunaList />
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


