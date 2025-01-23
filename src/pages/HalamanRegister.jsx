import { Button, Input, Typography } from '@material-tailwind/react';
import { useInput } from '../components/customHooks/useInput'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function HalamanRegister() {
    const [nama, onChangeNama] = useInput();
    const [email, onChangeEmail] = useInput();
    const [password, onChangePassword] = useInput();
    const [confPassword, onChangeConfPassword] = useInput();
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confPassword) {
            setError('Password and Confirm Password do not match!');
            return;
        }

        // Implement registration logic here
        console.log('Form submitted', { name, email, password });
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    <div className="mb-4">
                        <Input
                            label="Nama"
                            type="text"
                            value={nama}
                            onChange={onChangeNama}
                            required
                        />
                    </div>

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

                    <div className="mb-6">
                        <Input
                            label="Confirm Password"
                            type="password"
                            value={confPassword}
                            onChange={onChangeConfPassword}
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white">
                            Register
                        </Button>
                    </div>

                </form>
                <Typography variant='small'>Anda Sudah Punya Akun? Silakan Login <Link to={'/'} color='blue'>Disini</Link></Typography>
            </div>
        </div>
    );
}

export { HalamanRegister }