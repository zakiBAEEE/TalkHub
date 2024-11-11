

import React from 'react'
import { SidebarOn } from './SidebarOn';
import { SidebarOf } from './SidebarOf';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidebarOn: true
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState((prevState) => {
            return {
                isSidebarOn: !prevState.isSidebarOn
            }
        })
    }

    render() {

        return (
            <div className={`transition-all duration-900 ease-out ${this.state.isSidebarOn ? 'w-[12rem]' : 'w-20'
                }`}
            >
                {this.state.isSidebarOn ? (
                    <SidebarOn toggleHandler={this.toggleSidebar} />
                ) : (
                    <SidebarOf toggleHandler={this.toggleSidebar} />
                )}
            </div>
        )
    }
}

export { Sidebar }