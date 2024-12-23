import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { TabsFollow } from '../components/tabs/TabsFollow'
import { CariPengguna } from '../components/form/CariPengguna'


class HalamanFollow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cari',
        }
        this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
    }

    onChangePencarian(inputanUser) {
        console.log(inputanUser)
    }

    onChangeTabsAktif(tabsAktif) {
        this.setState((prevState) => {
            if (prevState.tabsAktif != tabsAktif) {
                return {
                    tabsAktif: tabsAktif
                }
            }
        })
    }
    render() {
        return (
            <div className='flex bg-blue-gray-50' >
                <Sidebar />
                <div className=' w-full  flex flex-col'>
                    <TabsFollow handler={this.onChangeTabsAktif} stateAktif={this.state.tabsAktif} className="h-auto" pencarianHandler={this.onChangePencarian} />
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


