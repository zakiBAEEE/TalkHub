import { Input } from "@material-tailwind/react";
import { useInput } from "../customHooks/useInput";
import PropTypes from "prop-types";

function SearchBar({ placeholder }) {
    const [input, onInputChange] = useInput();

    return (
        <div className="w-4/5">
            <Input
                placeholder={placeholder}
                value={input}
                onChange={onInputChange}
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
            />
        </div>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired
}

export { SearchBar }