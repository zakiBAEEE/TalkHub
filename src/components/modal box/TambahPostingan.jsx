import React, { Component } from "react";
import { AddPostingan } from '../button/AddPostingan'
import FroalaEditor from 'react-froala-wysiwyg';
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
import { TOOLBAR_BUTTONS, TOOLBAR_VISIBLE_BUTTONS } from "froala-editor/js/froala_editor.pkgd.min.js";

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

                    <FroalaEditor
                        config={{
                            placeholderText: 'Tulis Isi Pikiran Anda...',
                            toolbarButtons: {
                                moreText: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
                                moreParagraph: ['alignLeft', 'alignCenter'],
                                moreRich: ['insertLink']
                            },
                            toolbarButtonsXS: {
                                moreText: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
                                moreParagraph: ['alignLeft', 'alignCenter'],
                                moreRich: ['insertLink']
                            }
                        }}
                        tag="textarea"
                    />


                </Dialog>
            </>
        );
    }
}

export default TambahPostingan;
