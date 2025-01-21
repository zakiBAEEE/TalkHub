import { useState } from 'react'
import { TabsRuangDiskusi } from '../components/tabs/TabsRuangDiskusi'
import { useNavigate } from 'react-router-dom';

function HalamanDiskusi() {
    const navigate = useNavigate();
    const [tabsAktif, setTabsAktif] = useState('cari');
    const [tabsDalamTabsAktif, setTabsDalamTabsAktif] = useState('mengikuti');
}

export { HalamanDiskusi }

// function withRouter(Component) {
//     return function (props) {
//         const navigate = useNavigate();
//         return <Component {...props} navigate={navigate} />;
//     };
// }

// class HalamanDiskusi extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             tabsAktif: 'cari',
//             tabsDalamTabs: 'mengikuti'
//         }
//         this.onChangeTabsAktif = this.onChangeTabsAktif.bind(this)
//         this.onChangeTabsDalamTabs = this.onChangeTabsDalamTabs.bind(this)
//         this.onDetailHalamanDiskusi = this.onDetailHalamanDiskusi.bind(this)
//     }

//     onDetailHalamanDiskusi() {
//         // Navigasi menggunakan navigate dari props
//         this.props.navigate('HalamanDetail');
//     }
//     onChangePencarian(inputanUser) {
//         console.log(inputanUser)
//     }

//     onBuatHalamanDiskusi(event) {
//         console.log(event)
//     }

//     onChangeTabsDalamTabs(tabs) {
//         this.setState((prevState) => {
//             if (prevState.tabsDalamTabs != tabs) {
//                 return {
//                     tabsDalamTabs: tabs
//                 }
//             }
//         })
//     }

//     onChangeTabsAktif(tabsAktif) {
//         this.setState((prevState) => {
//             if (prevState.tabsAktif != tabsAktif) {
//                 return {
//                     tabsAktif: tabsAktif
//                 }
//             }
//         })
//     }
//     render() {
//         return (
//             <div className='flex bg-blue-gray-50' >
//                 <Sidebar toggleSidebar={this.props.toggleSidebar} isSidebarOn={this.props.isSidebarOn} />
//                 <div className=' w-full  flex flex-col'>
//                     <TabsRuangDiskusi handler={this.onChangeTabsAktif} stateAktif={this.state.tabsAktif} className="h-auto" pencarianHandler={this.onChangePencarian} handlerTabsDalamTabs={this.onChangeTabsDalamTabs} tabsDalamTabs={this.state.tabsDalamTabs} handlerTombolBuatRuang={this.onBuatHalamanDiskusi} handlerDetailRuangDiskusi={this.onDetailHalamanDiskusi} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(HalamanDiskusi);


