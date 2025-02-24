import React, { Component } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { DislikeButton } from "../button/DislikeButton";
import { LikeButton } from "../button/LikeButton";
import { CommentButton } from "../button/CommentButton";
import { ComentarList } from "../cardList/ComentarList";


class CardPostingan extends Component {
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
            isFollow: true,


            //Di comment : ... akan memanggil fungsi yang mengembalikan data komentar berdasarkan postinganId dari props Sehingga untuk mendapatkan jumlah komentar tinggal pake fungsi saja dengan menghitung seberapa banyak item komentar yang ada
            comment: 0,

            // INI SEMUA YANG DI KOMEN DI BAWAH AKAN ADA DI PROPS
            // postingan: "",
            // urlGambar: "",
            // penggunaId: "",
            // postinganId: "",
            // likes : ,
            // dislikes : 
        };
        this.onClickDislikesHandler = this.onClickDislikesHandler.bind(this);
        this.onClickLikesHandler = this.onClickLikesHandler.bind(this);
        this.onClickCommentHandler = this.onClickCommentHandler.bind(this);
        this.onFollowHandler = this.onFollowHandler.bind(this);
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

    onClickCommentHandler() {
        this.setState((prevState) => {
            console.log(this.state.visibilitasKomentar)
            return {
                visibilitasKomentar: !prevState.visibilitasKomentar
            }

        })
    }

    onFollowHandler() {
        this.setState((prevState) => {
            return {
                isFollow: !prevState.isFollow
            }
        })
    }

    // Method to toggle the expanded state
    toggleExpand = () => {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded, // Toggle the state
        }));
    };

    render() {
        // Full text for the content
        const fullText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptates consequuntur nemo deserunt quis fuga corporis aliquam porro reprehenderit laboriosam, tempore molestiae et ducimus eius natus saepe libero cupiditate optio explicabo laborum distinctio. A recusandae error nisi incidunt, asperiores natus totam soluta nesciunt perspiciatis, alias voluptas id dignissimos neque dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint, esse magnam vel voluptate sunt odit aliquam voluptatum quod consequatur ullam ipsa recusandae provident. Autem voluptatem quisquam voluptatum asperiores eum ullam nesciunt laudantium excepturi tempore harum accusamus soluta quos voluptas iusto, doloribus totam sunt fugit cupiditate ipsam suscipit! Vitae nesciunt molestias modi voluptate. Doloribus, magnam. Sint odio quaerat et labore velit debitis facere quisquam modi a accusantium beatae, aut repellendus sequi excepturi quas est cumque laudantium temporibus veritatis iste ducimus eos. Dolore sint officia reiciendis? Quas vel veniam distinctio eum, deleniti temporibus, in voluptate, consequatur ipsa non magnam dolorum voluptatem!`;

        // Limit text to show before expanding
        const limitedText = fullText.slice(0, 200);

        return (
            <Card color="white" shadow={true} className="w-[44rem]">
                <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-4 px-4"

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
                    <span className="cursor-pointer text-blue-600" onClick={this.onFollowHandler}>{this.state.isFollow ? 'Unfollow' : 'Follow'}</span>
                </CardHeader>
                <CardBody className=" px-4 py-3">
                    <Typography variant="h5" className="mb-1">Judul Postingan...</Typography>
                    <Typography>
                        {this.state.isExpanded ? fullText : limitedText}
                        {fullText.length > 10 && (
                            <span
                                onClick={this.toggleExpand}
                                className="text-blue-500 cursor-pointer ml-2"
                            >
                                {this.state.isExpanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
                            </span>
                        )}
                    </Typography>
                </CardBody>
                <div className="flex gap-5 pb-2 px-4">
                    <CommentButton jumlahComment={12} onClickHandler={this.onClickCommentHandler} />
                    <LikeButton jumlahLikes={this.state.likes} onClickHandler={this.onClickLikesHandler} />
                    <DislikeButton jumlahDislikes={this.state.dislikes} onClickHandler={this.onClickDislikesHandler} />
                </div>
                {this.state.visibilitasKomentar && (<ComentarList />)}
            </Card>
        );
    }
}

export { CardPostingan };
