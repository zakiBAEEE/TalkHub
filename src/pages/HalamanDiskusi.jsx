import { useState } from 'react'
import { SearchBar } from '../components/form/SearchBar';
import { mainTabs, subTabs } from '../components/utils/tabsDiskusi';
import { Tabs } from '../components/tabs/Tabs';
import { RuangDiskusiList } from '../components/cardList/RuangDiskusiList';

function HalamanDiskusi() {
    const [activeTab, setActiveTab] = useState('cariRuang');
    const [activeChildTab, setActiveChildTab] = useState('mengikuti');

    return (
        <div className=' w-full  flex flex-col'>
            <SearchBar placeholder='Cari Ruang Diskusi' />
            <Tabs tabs={mainTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                activeTab == 'cariRuang' ? (<RuangDiskusiList />) : (
                    <div className='m-auto mt-6 flex flex-col gap-4 items-start flex-grow w-[90%]'>
                        <Tabs tabs={subTabs} activeTab={activeChildTab} setActiveTab={setActiveChildTab} />
                        {
                            activeChildTab == 'mengikuti' ? (<RuangDiskusiList />) : (<RuangDiskusiList />)
                        }
                    </div>
                )
            }
        </div>
    )

}

export { HalamanDiskusi }

