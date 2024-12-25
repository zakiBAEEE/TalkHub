import { HalamanBeranda } from './pages/HalamanBeranda'
import { HalamanFollow } from './pages/HalamanFollow'
import HalamanDiskusi from './pages/HalamanDiskusi';
import { Routes, Route } from "react-router-dom";
import React from 'react'
import { DetailHalamanRuangDiskusi } from './pages/DetailHalamanDiskusi';
import { HalamanProfile } from './pages/HalamanProfile';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSidebarOn: true // State sidebar dikelola di sini
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      isSidebarOn: !prevState.isSidebarOn
    }));
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HalamanBeranda toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/diskusi" element={<HalamanDiskusi toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/diskusi/HalamanDetail" element={<DetailHalamanRuangDiskusi />} />
        <Route path="/follow" element={<HalamanFollow toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/profile" element={<HalamanProfile />} />
      </Routes>
    )
  }
}

export default App
