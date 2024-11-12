import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { TabsFollow } from '../components/tabs/TabsFollow'
import { CariPengguna } from '../components/form/CariPengguna'


class HalamanFollow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cari'
        }

        this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
    }

    onChangeTabsAktif(tabsAktif) {
        this.setState((prevState) => {
            // Agar halaman tidak refresh apabila terjadi perubahan state ketika state nya tidak berubah
            if (prevState != tabsAktif) {
                return {
                    tabsAktif: tabsAktif
                }
            }
        })
    }
    render() {
        console.log(this.state.tabsAktif)
        return (
            <div className='flex bg-blue-gray-50 min-h-[100vh] ' >
                <Sidebar />
                <div className='mx-auto flex-grow'>
                    <TabsFollow handler={this.onChangeTabsAktif} stateAktif={this.state.tabsAktif} />
                    <CariPengguna />
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


