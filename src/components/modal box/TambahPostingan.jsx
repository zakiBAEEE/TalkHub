import React, { Component } from "react";
import { AddPostingan } from '../button/AddPostingan'
import {
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

class TambahPostingan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen = () => {
        this.setState((prevState) => ({ open: !prevState.open }));
    };

    render() {


        return (
            <>
                <AddPostingan onClickHandler={this.handleOpen} />
                <Dialog
                    size="xs"
                    open={this.state.open}
                    handler={this.handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card className="mx-auto w-full max-w-[24rem]">
                        <CardBody className="flex flex-col gap-4">
                            <Typography variant="h4" color="blue-gray">
                                Sign In
                            </Typography>
                            <Typography
                                className="mb-3 font-normal"
                                variant="paragraph"
                                color="gray"
                            >
                                Enter your email and password to Sign In.
                            </Typography>
                            <Typography className="-mb-2" variant="h6">
                                Your Email
                            </Typography>
                            <Input label="Email" size="lg" />
                            <Typography className="-mb-2" variant="h6">
                                Your Password
                            </Typography>
                            <Input label="Password" size="lg" />
                            <div className="-ml-2.5 -mt-3">
                                <Checkbox label="Remember Me" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <AddPostingan onClick={this.handleOpen} />
                            <Typography variant="small" className="mt-4 flex justify-center">
                                Don&apos;t have an account?
                                <Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue-gray"
                                    className="ml-1 font-bold"
                                    onClick={this.handleOpen}
                                >
                                    Sign up
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                </Dialog>
            </>
        );
    }
}

export default TambahPostingan;
