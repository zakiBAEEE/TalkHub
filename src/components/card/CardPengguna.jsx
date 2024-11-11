import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
} from "@material-tailwind/react";

export function CardPengguna() {
    return (
        <Card className="mt-6 w-60">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" className="m-auto pt-2" />
            <CardBody className="pb-2">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    Muhammad Dzaky Raihan
                </Typography>
                <Typography className="">
                    Hi, Im a professional Web Dev
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 pb-2 justify-center flex">
                <Button className="bg-light-blue-800" size="sm">Follow</Button>
            </CardFooter>
        </Card>
    );
}