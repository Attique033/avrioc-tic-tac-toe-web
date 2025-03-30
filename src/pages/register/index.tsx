import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuthActions} from "../../store/auth/useAuthActions.ts";

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const {registerUser} = useAuthActions();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerUser(formData)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div
            className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-purple-400 to-blue-400 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                    <h2 className="text-3xl font-bold text-white text-center mb-2">Create Account</h2>
                    <h2 className="text-l text-white/90 text-center mb-8">Sign up to get started</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-left text-sm font-medium text-white mb-2">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left text-sm font-medium text-white mb-2">
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
                            <label htmlFor="password" className="block text-left text-sm font-medium text-white mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
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
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-white">
                            Already have an account?{' '}
                            <Link to="/"
                                  className="text-white font-medium hover:text-text-white/80 transition-colors duration-200">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
