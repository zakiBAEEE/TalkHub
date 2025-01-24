import PropTypes from 'prop-types';
import { Card, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ChatBubbleBottomCenterIcon, HomeIcon, PowerIcon, UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/solid';

function Sidebar({ isSidebarOn, toggleHandler, onLogout }) {
    return (
        <div className={`transition-all duration-900 ease-out ${isSidebarOn ? 'w-[12rem]' : 'w-20'
            }`}
        >
            <Card className='h-[calc(100vh)] max-w-[10rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white fixed'>
                <div className="mb-2 p-4">
                    <button>
                        <Typography variant="h5" color="blue-gray" onClick={toggleHandler}>
                            {isSidebarOn ? 'TalkHub' : "T"}
                        </Typography>
                    </button>

                </div>
                <div className='flex flex-col gap-5'>
                    <Link to="/">
                        <ListItem>
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {isSidebarOn && 'Beranda'}
                        </ListItem>
                    </Link>
                    <Link to="/follow">
                        <ListItem>
                            <ListItemPrefix>
                                <UserPlusIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {isSidebarOn && 'Follow'}
                        </ListItem>
                    </Link>
                    <Link to="/diskusi">
                        <ListItem>
                            <ListItemPrefix>
                                <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {isSidebarOn && 'Diskusi'}
                        </ListItem>
                    </Link>

                    <Link to="/profile">
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {isSidebarOn && 'Profile'}
                        </ListItem>
                    </Link>


                    <ListItem onClick={onLogout}>
                        {/* <Link to="/"></Link> */}
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {isSidebarOn && 'Logout'}
                    </ListItem>

                </div>

            </Card>

        </div>
    )
}

Sidebar.propTypes = {
    isSidebarOn: PropTypes.bool.isRequired,
    toggleHandler: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
}
export { Sidebar }