import React from 'react'

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

function SidebarOn({ toggleHandler }) {
    return (
        <Card className="h-[calc(100vh)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-100">
            <div className="mb-2 p-4">
                <button>
                    <Typography variant="h5" color="blue-gray" onClick={toggleHandler}>
                        TalkHub
                    </Typography>
                </button>

            </div>
            <div className='flex flex-col gap-5'>
                <ListItem>
                    <ListItemPrefix>
                        <HomeIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Beranda
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserPlusIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Follow
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Ruang Diskusi
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
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