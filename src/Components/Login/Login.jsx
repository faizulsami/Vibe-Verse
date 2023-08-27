import { Typewriter } from 'react-simple-typewriter';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import SocialLogin from '../Social Login/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            });
    };
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="bg">
            <div className="flex justify-center items-center h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm bg-[#a6ddf0] shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <p className="text-center text-black text-xl lg:text-3xl">
                            <Typewriter
                                words={['Welcome Back👋', 'Please', 'Login!!!']}
                                loop={5}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered pr-10"
                                    required
                                />
                                {/* - */}
                                <span
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <RiEyeFill className='text-black' size={20} />
                                    ) : (
                                        <RiEyeOffFill size={20} />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="button-28" role="button" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="ms-9 mb-3">
                        New in Vibe Verse? <Link className="text-blue-800" to="/register">Sign Up</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
