import { useState } from 'react';
import { Tabs } from '../components/tabs/Tabs';
import { mainTabs } from '../components/utils/tabsFollow';
import { SearchBar } from '../components/form/SearchBar';

function HalamanFollow() {
    const [activeTabs, setActiveTab] = useState('cariPengguna');

    return (
        <div className='flex bg-blue-gray-50' >
            <div className=' w-full  flex flex-col'>
                <Tabs tabs={mainTabs} activeTab={activeTabs} setActiveTab={setActiveTab} />
                <SearchBar />
            </div>
        </div>
    )
}

export { HalamanFollow }

