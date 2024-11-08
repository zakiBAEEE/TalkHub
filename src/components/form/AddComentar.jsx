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
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeKomentarHandler(event) {
        this.setState(() => {
            return {
                komentar: event.target.value
            }
        })
    }

    //Selesaikan Fungsi Untuk Menambah Komentar Ketika Button Di Klik
    onSubmitHandler() {

    }

    render() {
        return (
            <div className=" flex gap-x-3 mb-4 p-2 bg-blue-gray-50">
                <Input label="Komentar" placeholder='Tambahkan Komentar' size='lg' color='black' value={this.state.komentar} onChange={this.onChangeKomentarHandler} />
                <Button onClick={this.onSubmitHandler}>Post</Button>;
            </div>
        )
    }

}

export { AddComentar }