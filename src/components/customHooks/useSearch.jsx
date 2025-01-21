import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function useSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get('search') || '');

    function onChangeValue(e) {
        setValue(e.target.value);
        setSearchParams({ search: e.target.value });
    }

    return [value, onChangeValue];
}

export { useSearch }