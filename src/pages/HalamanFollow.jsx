import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PenggunaList } from '../components/cardList/PenggunaList'
import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'

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
                    <Tabs value='cari'>
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                            }}
                        >
                            <Tab key='cari' value='cari' onClick={this.onChangeTabsAktif}>Cari Pengguna</Tab >
                            <Tab key='mengikuti' value='mengikuti' onClick={this.onChangeTabsAktif}>Mengikuti</Tab>
                        </TabsHeader>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export { HalamanFollow }


