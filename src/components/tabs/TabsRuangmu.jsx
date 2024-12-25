import React from 'react'
import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { TombolBuat } from '../tombol/Tombol'


function TabsRuangmu({ handler, stateAktif, handlerTombolBuatRuang, handlerDetailRuangDiskusi }) {
    return (
        <Tabs value={stateAktif} className=" m-auto mt-6 flex flex-col gap-4 items-start flex-grow w-[90%]">
            <div className="w-full">
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 gap-5 flex flex-row justify-center items-center w-60"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    <Tab key='mengikuti' value='mengikuti' onClick={() => { handler('mengikuti') }} className='w-full'>
                        Mengikuti
                    </Tab>

                    <Tab key='ruang mu2' value='ruang mu2' onClick={() => { handler('ruang mu2') }} className='w-full'>
                        Ruang Mu
                    </Tab>
                </TabsHeader>
                <div className="border-t border-blue-gray-700 mt-2"></div>
            </div>
            <TabsBody className='min-h-[100vh] flex flex-col items-center w-full'>
                {
                    stateAktif == 'mengikuti' ? "" :
                        <div className='w-full'>
                            <TombolBuat namaTombol={"Buat Ruang"} handler={handlerTombolBuatRuang} />
                        </div>
                }
            </TabsBody>
        </Tabs>
    )
}

export { TabsRuangmu }
