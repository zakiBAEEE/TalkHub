import { Input } from "@material-tailwind/react";
import React from 'react'
class CariPengguna extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(event) {
        this.setState(() => {
            return {
                value: event.target.value
            }
        })
        this.props.pencarianHandler(this.state.value)
    }
    render() {
        return (
            <div className="w-4/5">
                <Input
                    placeholder="Cari Pengguna"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                        className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                />
            </div>
        );
    }
}

export { CariPengguna }