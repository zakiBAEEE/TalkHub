import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { TabsRuangDiskusi } from '../components/tabs/TabsRuangDiskusi'


class HalamanDiskusi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsAktif: 'cari',
            tabsDalamTabs: 'mengikuti'
        }
        this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
        this.onChangeTabsDalamTabs = this.onChangeTabsDalamTabs.bind(this)
    }

    onChangePencarian(inputanUser) {
        console.log(inputanUser)
    }

    onChangeTabsDalamTabs(tabs) {
        this.setState((prevState) => {
            if (prevState.tabsDalamTabs != tabs) {
                return {
                    tabsDalamTabs: tabs
                }
            }
        })
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
                    <TabsRuangDiskusi handler={this.onChangeTabsAktif} stateAktif={this.state.tabsAktif} className="h-auto" pencarianHandler={this.onChangePencarian} handlerTabsDalamTabs={this.onChangeTabsDalamTabs} tabsDalamTabs={this.state.tabsDalamTabs} />
                </div>
            </div>
        )
    }
}

export { HalamanDiskusi }


