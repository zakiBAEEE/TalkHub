import { useState } from "react"

function useInput() {
    const [value, setValue] = useState('')

    function onChangeValue(e) {
        setValue(e.target.value)
    }

    return [value, onChangeValue]
}

export { useInput }