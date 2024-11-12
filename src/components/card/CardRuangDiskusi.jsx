import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import React from 'react';

class CardRuangDiskusi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFollow: false
        }
    }

    onFollowHandler() {
        this.setState((prevState) => {
            return {
                isFollow: !prevState.isFollow
            }
        })
    }


    render() {
        return (
            <Card className="w-56 h-72  flex flex-col">
                <div className="h-1/2 flex flex-col over">
                    <img className="h-1/2"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="ui/ux review check"
                    />
                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" size="xl" className=" m-auto relative bottom-5" />

                </div>

                <div className="flex flex-col grow p-0">
                    <Typography children="Keluhan Mahasiswa " variant="h5" className="m-auto" />

                    <p className="text-center pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, autem?</p>
                </div>

            </Card>
        );
    }

}

export { CardRuangDiskusi }