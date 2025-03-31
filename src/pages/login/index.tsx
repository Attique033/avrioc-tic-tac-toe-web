import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthActions } from '../../store/auth/useAuthActions.ts';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { loginUser } = useAuthActions();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginUser(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-purple-400 to-blue-400 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                    <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
                    <h2 className="text-l text-white/90 text-center mb-8">Sign in to continue</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-sm font-medium text-white mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-left text-sm font-medium text-white mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                minLength={8}
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-500 backdrop-blur-sm hover:bg-purple-700 hover:text-red font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-white">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="text-white font-medium hover:text-white/80 transition-colors duration-200"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
