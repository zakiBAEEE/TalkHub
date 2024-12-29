import React from 'react'
import { TombolBack } from '../components/tombol/TombolBack'

class DetailHalamanRuangDiskusi extends React.Component {
    render() {
        return (
            <div className="relative flex flex-col w-full h-full">
                <div className="absolute top-2 left-2">
                    <TombolBack handler={""} />
                </div>
                <div className="w-2/3 bg-amber-700 h-[14rem] m-auto">
                    <div className="w-[12rem] bg-teal-600 h-[12rem] relative top-[9rem] left-[4rem]"></div>
                </div>
            </div>


        )
    }
}
export { DetailHalamanRuangDiskusi }
