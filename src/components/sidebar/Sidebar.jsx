

import React from 'react'
import { SidebarOn } from './SidebarOn';
import { SidebarOf } from './SidebarOf';

function Sidebar({ isSidebarOn, toggleSidebar }) {
    return (
        <div className={`transition-all duration-900 ease-out ${isSidebarOn ? 'w-[12rem]' : 'w-20'
            }`}
        >
            {isSidebarOn ? (
                <SidebarOn toggleHandler={toggleSidebar} />
            ) : (
                <SidebarOf toggleHandler={toggleSidebar} />
            )}
        </div>
    )
}
export { Sidebar }