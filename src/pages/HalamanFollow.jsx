import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'

class HalamanFollow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cari'
        }

        this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
    }

    onChangeTabsAktif() {
        this.setState((prevState) => {
            return {
                tabsAktif: prevState.tabsAktif = 'cariPengguna' ? 'mengikuti' : 'cariPengguna'
            }
        })
    }
    render() {
        console.log(this.state.tabsAktif)
        return (
            <div className='flex bg-blue-gray-50 min-h-[100vh] ' >
                <Sidebar />
                <div className='mx-auto flex-grow'>
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


