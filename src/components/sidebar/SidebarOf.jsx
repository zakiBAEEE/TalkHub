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


function SidebarOf({ toggleHandler }) {
    return (
        <Card className="h-[calc(100vh)]  max-w-[5rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-100 flex ">
            <div className="mb-2 p-4">
                <button>
                    <Typography variant="h5" color="blue-gray" onClick={toggleHandler}>
                        T
                    </Typography>
                </button>
            </div>
            <div className='flex flex-col gap-5'>
                <ListItem className='max-w-[3rem]'>
                    <HomeIcon className="h-5 w-5" />
                </ListItem>
                <ListItem className='max-w-[3rem]'>
                    <UserPlusIcon className="h-5 w-5" />
                </ListItem>
                <ListItem className='max-w-[3rem]'>
                    <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                </ListItem>
                <ListItem className='max-w-[3rem]'>
                    <UserCircleIcon className="h-5 w-5" />
                </ListItem>
                <ListItem className='max-w-[3rem]'>
                    <PowerIcon className="h-5 w-5" />
                </ListItem>
            </div>


        </Card>
    );
}

export { SidebarOf }