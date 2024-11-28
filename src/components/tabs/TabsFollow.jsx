import React from 'react'
import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { CariPengguna } from '../form/CariPengguna'

function TabsFollow({ handler, stateAktif }) {
    return (
        <Tabs value={stateAktif} className="w-1/4 m-auto mt-2">
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex gap-5"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                <Tab key='cari' value='cari' onClick={() => { handler('cari') }}>Cari Pengguna</Tab >
                <Tab key='mengikuti' value='mengikuti' onClick={() => { handler('mengikuti') }}>Mengikuti</Tab>
            </TabsHeader>
            <TabsBody>
                <CariPengguna />
            </TabsBody>
        </Tabs>
    )
}

export { TabsFollow }
