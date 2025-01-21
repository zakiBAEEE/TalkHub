// eslint-disable-next-line no-unused-vars
import React from 'react'
import { SidebarOn } from './SidebarOn';
import { SidebarOf } from './SidebarOf';
import PropTypes from 'prop-types';

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

Sidebar.propTypes = {
    isSidebarOn: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired
}
export { Sidebar }