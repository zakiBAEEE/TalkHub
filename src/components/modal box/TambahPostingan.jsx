import React, { Component } from "react";
import { AddPostingan } from '../button/AddPostingan'
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';


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
            postingan: "",
            urlGambar: ""
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

                    <FroalaEditorComponent tag="textarea" />

                </Dialog>
            </>
        );
    }
}

export default TambahPostingan;
