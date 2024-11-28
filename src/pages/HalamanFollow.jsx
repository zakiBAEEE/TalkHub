import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { TabsFollow } from '../components/tabs/TabsFollow'
import { CariPengguna } from '../components/form/CariPengguna'


class HalamanFollow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cari',
            hehe: "cari"
        }

        this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
    }

    onChangeTabsAktif(tabsAktif) {
        this.setState((prevState) => {
            // Agar halaman tidak refresh apabila terjadi perubahan state ketika state nya tidak berubah
            if (prevState.tabsAktif != tabsAktif) {
                console.log(tabsAktif)
                return {
                    tabsAktif: tabsAktif
                }
            }
        })
    }
    render() {
        console.log(this.state.tabsAktif)
        return (
            <div className='flex bg-blue-gray-50' >
                <Sidebar />
                <div className=' flex-grow flex flex-col'>
                    <TabsFollow handler={this.onChangeTabsAktif} stateAktif={this.state.tabsAktif} className="h-auto" />
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


