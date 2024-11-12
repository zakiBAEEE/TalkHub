import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'
import { TabsFollow } from '../components/tabs/TabsFollow'


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
                tabsAktif: prevState.tabsAktif == 'cari' ? 'mengikuti' : 'cari'
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
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


