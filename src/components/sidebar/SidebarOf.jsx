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


function SidebarOf({ toggleHandler }) {
    return (
        <Card className="h-[calc(100vh)]  min-w-[5rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-50 flex fixed">
            <div className="mb-2 p-4">
                <button>
                    <Typography variant="h5" color="blue-gray" onClick={toggleHandler}>
                        T
                    </Typography>
                </button>
            </div>
            <div className='flex flex-col gap-5'>
                <Link to="/">
                    <ListItem>

                        <HomeIcon className="h-5 w-5" />

                    </ListItem>
                </Link>
                <Link to="/follow">
                    <ListItem>

                        <UserPlusIcon className="h-5 w-5" />


                    </ListItem>
                </Link>
                <Link to="/diskusi">
                    <ListItem>

                        <ChatBubbleBottomCenterIcon className="h-5 w-5" />


                    </ListItem>
                </Link>
                <Link to="/profile">
                    <ListItem>

                        <UserCircleIcon className="h-5 w-5" />


                    </ListItem>
                </Link>
                <ListItem>
                    <PowerIcon className="h-5 w-5" />
                </ListItem>
            </div>

        </Card>
    );
}

export { SidebarOf }