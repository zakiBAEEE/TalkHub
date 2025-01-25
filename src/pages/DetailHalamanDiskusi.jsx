import React from 'react'
// import { HeaderDetailDiskusi } from '../components/component/HeaderDetailDiskusi'


class DetailHalamanRuangDiskusi extends React.Component {
    render() {
        return (
            <>
                <div className="flex flex-col w-full min-h-screen bg-blue-100">
                    {/* Header Section */}
                    <header className="relative bg-red-500 h-48 flex justify-center items-center">
                        <div className="absolute bottom-0 transform translate-y-1/2">
                            <div className="bg-blue-500 w-20 h-20 lg:w-24 lg:h-24 rounded"></div>
                        </div>
                    </header>

                    {/* Detail Diskusi */}
                    <div className="bg-white shadow p-6 mt-12 mx-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold">Belajar IT</h1>
                                <p className="text-gray-600 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod nunc et tortor tincidunt,
                                    vel facilisis nisi pulvinar. Integer non.
                                </p>
                                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-700">
                                    <span>50 Follower</span>
                                    <span>10 Thread</span>
                                    <span>Admin: Zaki9999</span>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ikuti</button>
                        </div>
                    </div>

                    {/* Tab Section */}
                    <div className="bg-white shadow mt-6 mx-4 rounded-lg">
                        <div className="border-b flex">
                            <button className="flex-1 p-4 text-center font-semibold hover:bg-gray-100">Diskusi</button>
                            <button className="flex-1 p-4 text-center font-semibold hover:bg-gray-100">Pertanyaan</button>
                        </div>
                        <div className="p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buat Pertanyaan</button>
                        </div>
                    </div>

                    {/* Thread Section */}
                    <div className="bg-white shadow mt-6 mx-4 rounded-lg p-4">
                        <div className="border-b pb-4 mb-4">
                            <p className="text-gray-700 font-semibold">Om_Wawan</p>
                            <p className="text-sm text-gray-500">12 April 2024</p>
                        </div>
                        <p className="text-gray-800">Bagaimana Cara Kerja API ??</p>
                        <p className="text-blue-500 mt-4 text-right">15 Jawaban</p>
                    </div>
                </div>
            </>
        )
    }
}
export { DetailHalamanRuangDiskusi }
