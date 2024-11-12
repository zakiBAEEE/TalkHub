import React from 'react'
import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'

function TabsFollow({ handler, stateAktif }) {
    return (
        <Tabs value={stateAktif}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                <Tab key='cari' value='cari' onClick={() => { handler('cari') }}>Cari Pengguna</Tab >
                <Tab key='mengikuti' value='mengikuti' onClick={() => { handler('mengikuti') }}>Mengikuti</Tab>
            </TabsHeader>
        </Tabs>
    )
}

export { TabsFollow }
