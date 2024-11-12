import { Input } from "@material-tailwind/react";

function CariPengguna() {
    return (
        <div className="w-72">
            <Input
                type="email"
                placeholder="Email Address"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                    className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
            />
        </div>
    );
}

export { CariPengguna }