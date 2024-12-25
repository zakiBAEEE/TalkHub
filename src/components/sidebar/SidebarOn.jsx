import React from 'react'
import { Link } from "react-router-dom";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    UserPlusIcon,
    ChatBubbleBottomCenterIcon,
    UserCircleIcon,
    HomeIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Copyright } from '../text/Copyright';

function SidebarOn({ toggleHandler }) {
    return (
        <Card className="h-[calc(100vh)] w-full max-w-[12rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white fixed">
            <div className="mb-2 p-4">
                <button>
                    <Typography variant="h5" color="blue-gray" onClick={toggleHandler}>
                        TalkHub
                    </Typography>
                </button>

            </div>
            <div className='flex flex-col gap-5'>
                <Link to="/">
                    <ListItem>
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Beranda
                    </ListItem>
                </Link>
                <Link to="/follow">
                    <ListItem>
                        <ListItemPrefix>
                            <UserPlusIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Follow
                    </ListItem>
                </Link>
                <Link to="/diskusi">
                    <ListItem>
                        <ListItemPrefix>
                            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Diskusi
                    </ListItem>
                </Link>

                <Link to="/profile">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>


                <ListItem>
                    {/* <Link to="/"></Link> */}
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Logout
                </ListItem>

            </div>

        </Card>
    );
}

export { SidebarOn }