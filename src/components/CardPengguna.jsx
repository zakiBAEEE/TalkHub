import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

function TestimonialCard() {
    return (
        <Card color="white" shadow={true} className="w-full max-w-[44rem] px-4">
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-4"
            >
                <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Tania Andrew
                        </Typography>

                    </div>
                    <Typography color="blue-gray" className="text-sm">12 April 2022</Typography>
                </div>
            </CardHeader>
            <CardBody className="mb-3 p-0">
                <Typography variant="h5" className="mb-2">Judul Postingan...</Typography>
                <Typography>
                    &quot;I found solution to all my design needs from Creative Tim. I use
                    them as a freelancer in my hobby projects for fun! And its really
                    affordable, very humble guys !!!&quot;
                </Typography>
            </CardBody>
            <div className="flex gap-5 pb-2">
                <div className="flex gap-1">
                    <button><FaComment /></button>

                    <p>12</p>
                </div>
                <div className="flex gap-1">
                    <button><FaThumbsUp /></button>

                    <p>12</p>
                </div>
                <div className="flex gap-1">
                    <button>
                        <FaThumbsDown />
                    </button>
                    <p>2</p>
                </div>

            </div>
        </Card>
    );
}

export { TestimonialCard }