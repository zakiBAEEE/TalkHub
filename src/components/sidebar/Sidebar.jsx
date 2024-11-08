

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
        if (this.state.isSidebarOn) {
            return <SidebarOn toggleHandler={this.toggleSidebar} />
        }
        else {
            return <SidebarOf toggleHandler={this.toggleSidebar} />
        }
    }
}

export { Sidebar }