import { useState } from 'react'

function useSearchInput() {
    const [value, setValue] = useState('');

    function onChangeValue(e) {
        setValue(e.target.value);
    }

    return [value, onChangeValue];
}

export { useSearchInput }