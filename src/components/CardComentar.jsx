import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { DislikeButton } from "../button/DislikeButton";
import { LikeButton } from "../button/LikeButton";

// Card comentar ini memiliki props likes, dislikes, komentar, penggunaId

class CardComentar extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            isExpanded: false, // Track whether the content is expanded or not
            likes: 0,
            dislikes: 0,
            hasDislikes: false,
            hasLikes: false,
            visibilitasKomentar: false,
        };
        this.onClickDislikesHandler = this.onClickDislikesHandler.bind(this);
        this.onClickLikesHandler = this.onClickLikesHandler.bind(this);
    }


    onClickDislikesHandler() {
        if (this.state.hasDislikes) {
            this.setState((prevState) => {
                return {
                    dislikes: prevState.dislikes - 1,
                    hasDislikes: !prevState.hasDislikes
                }
            })
        }
        else {
            this.setState((prevState) => {
                if (this.state.hasLikes) {
                    return {
                        dislikes: prevState.dislikes + 1,
                        hasDislikes: !prevState.hasDislikess,
                        likes: prevState.likes - 1,
                        hasLikes: !prevState.hasLikes
                    }
                }
                else {
                    return {
                        dislikes: prevState.dislikes + 1,
                        hasDislikes: !prevState.hasDislikess,
                    }
                }

            })
        }
    }

    onClickLikesHandler() {
        if (this.state.hasLikes) {
            this.setState((prevState) => {
                return {
                    likes: prevState.likes - 1,
                    hasLikes: !prevState.hasLikes
                }
            })
        }
        else {
            this.setState((prevState) => {
                if (prevState.hasDislikes) {
                    return {
                        likes: prevState.likes + 1,
                        hasLikes: !prevState.hasLikes,
                        dislikes: prevState.dislikes - 1,
                        hasDislikes: !prevState.hasDislikes
                    }
                }
                else {
                    return {
                        likes: prevState.likes + 1,
                        hasLikes: !prevState.hasLikes
                    }
                }
            })
        }
    }

    render() {
        // Full text for the content
        return (
            <Card color="white" shadow={false} className=" px-4 min-h-[5rem]">
                <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-4"
                >
                    <Avatar
                        size="md"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography variant="h6" color="blue-gray">
                                Tania Andrew
                            </Typography>
                        </div>
                        <Typography color="blue-gray" className="text-xs">12 April 2022</Typography>
                    </div>
                </CardHeader>
                <CardBody className="mb-3 p-0">
                    <Typography variant='small'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptates consequuntur nemo deserunt quis fuga cors vel veniam distinctio eum, deleniti temporibus, in voluptate, consequatur ipsa non magnam dolorum voluptatem!
                    </Typography>
                </CardBody>
                <div className="flex gap-5 pb-2">
                    <LikeButton jumlahLikes={this.state.likes} onClickHandler={this.onClickLikesHandler} />
                    <DislikeButton jumlahDislikes={this.state.dislikes} onClickHandler={this.onClickDislikesHandler} />
                </div>
                <div className=' h-[1px] bg-blue-gray-300'></div>
            </Card>
        );
    }
}

export { CardComentar }