import React from 'react'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

class AddComentar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            komentar: ""
        }
        this.onChangeKomentarHandler = this.onChangeKomentarHandler.bind(this);
    }

    onChangeKomentarHandler(event) {
        this.setState(() => {
            return {
                komentar: event.target.value
            }
        })
    }

    render() {
        return (
            <div className=" flex gap-x-3 mb-4">
                <Input label="Komentar" placeholder='Tambahkan Komentar' size='lg' color='black' value={this.state.komentar} onChange={this.onChangeKomentarHandler} />
                <Button>Post</Button>;
            </div>
        )
    }

}

export { AddComentar }