import { useState } from "react";
import { useInput } from "../components/customHooks/useInput";

import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function HalamanLogin({ onLogin }) {
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const [error, setError] = useState();


    function handleSubmit(e) {
        e.preventDefault();


        // Implement registration logic here
        onLogin(email, password)
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={() => { }}>
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    <div className="mb-4">
                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white" onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </form>
                <div className="flex justify-center mt-4">
                    <span className="text-sm text-gray-600">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Sign up</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export { HalamanLogin }