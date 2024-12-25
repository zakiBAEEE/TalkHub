import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

export function CardRuangDiskusi({ handlerDetailRuangDiskusi }) {
    return (
        <Card className="w-64 h-72 overflow-hidden flex flex-col cursor-pointer" onClick={handlerDetailRuangDiskusi}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-[45%]"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody className="h-2/3 overflow-auto">
                <Typography variant="h5" color="blue-gray">
                    Diskusi IT
                </Typography>
                <Typography variant="small" color="gray" className="mt-3 font-normal">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                    follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between h-12">
                <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
            </CardFooter>
        </Card>

    );
}