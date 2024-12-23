import React from 'react'
import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'


function TabsRuangmu({ handler, stateAktif }) {
    return (
        <Tabs value={stateAktif} className=" m-auto mt-2 flex flex-col gap-4 items-start flex-grow w-[90%]">
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 gap-5 w-full flex flex-row justify-center items-center w-56"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                <Tab key='cari' value='cari' onClick={() => { handler('cari') }} className='w-full'>Mengikuti</Tab >

                <Tab key='mengikuti' value='mengikuti' onClick={() => { handler('mengikuti') }}>Ruang Mu</Tab>
            </TabsHeader>
            <TabsBody className='min-h-[100vh] flex flex-col items-center w-full'>
                {
                    stateAktif == 'cari' ? "" :
                        ""
                }
            </TabsBody>
        </Tabs>
    )
}

export { TabsRuangmu }
