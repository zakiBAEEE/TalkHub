import React, { useState } from 'react'
import { SearchBar } from '../components/form/SearchBar';
import { mainTabs, subTabs } from '../components/utils/tabsDiskusi';
import { Tabs } from '../components/tabs/Tabs';
import { RuangDiskusiList } from '../components/cardList/RuangDiskusiList';
import { readRuangDiskusi } from '../components/utils/api';

function HalamanDiskusi() {
    const [activeTab, setActiveTab] = useState('cariRuang');
    const [activeChildTab, setActiveChildTab] = useState('mengikuti');
    const [ruangDiskusis, setRuangDiskusis] = useState(null);
    const [initializing, setInitializing] = useState(true);

    React.useEffect(() => {
        const data = readRuangDiskusi();
        setRuangDiskusis(data);
        setInitializing(false);
    }, [])

    if (initializing) {
        return null
    }

    const filteredRuangDiskusis = ruangDiskusis.filter((ruangDiskusi) => {
        if (activeTab == 'cariRuang') {
            return ruangDiskusi.follow == false
        }
        else if (activeTab == 'ruangMu') {
            if (activeChildTab == 'mengikuti') {
                return ruangDiskusi.follow = true
            }
            return ruangDiskusi.isCreatedByMe == true
        }
    })

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center py-3'>
                <Tabs tabs={mainTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar placeholder='Cari Ruang Diskusi' />
            </div>
            {
                activeTab == 'cariRuang' ? (<RuangDiskusiList ruangDiskusis={filteredRuangDiskusis} />) : (
                    <div className='m-auto mt-6 flex flex-col gap-4 items-start flex-grow w-[90%]'>
                        <Tabs tabs={subTabs} activeTab={activeChildTab} setActiveTab={setActiveChildTab} />
                        {
                            activeChildTab == 'mengikuti' ? (<RuangDiskusiList ruangDiskusis={filteredRuangDiskusis} />) : (<RuangDiskusiList ruangDiskusis={filteredRuangDiskusis} />)
                        }
                    </div>
                )
            }
        </div>
    )

}

export { HalamanDiskusi }

