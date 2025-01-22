import { useState } from 'react';
import { Tabs } from '../components/tabs/Tabs';
import { mainTabs } from '../components/utils/tabsFollow';
import { SearchBar } from '../components/form/SearchBar';

function HalamanFollow() {
    const [activeTabs, setActiveTab] = useState('cariPengguna');

    return (

        <div className='flex flex-col items-center py-3'>
            <Tabs tabs={mainTabs} activeTab={activeTabs} setActiveTab={setActiveTab} />
            <SearchBar placeholder='Cari Pengguna' />
        </div>

    )
}

export { HalamanFollow }

