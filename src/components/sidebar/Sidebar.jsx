import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    UserPlusIcon,
    ChatBubbleBottomCenterIcon,
    UserCircleIcon,
    HomeIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    TalkHub
                </Typography>
            </div>
            <List>
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
            </List>
        </Card>
    );
}

export { Sidebar }