import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import SocialLogin from '../Social Login/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const currentTime = new Date();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm();

    const password = watch("password");

    const onSubmit = data => {


        if (data.password !== data.confirmPassword) {
            setError('Password and Confirm Password should match');
            return;
        }
        const followers = []
        const following = []
        const isAdmin = false;

        const createAt = currentTime.toISOString();
        console.log(createAt);

        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { firstName: data.first_name, lastName: data.last_name, email: data.email, password: data.password, photo: data.photo, isAdmin, followers, following, createAt };

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    navigate('/');
                                    setError('');
                                }
                            });
                    });
            });
    };
    return (
        <div className='bg'>
            <div className="flex justify-center items-center h-screen">
                <div className="card mb-5 lg:mb-12 flex-shrink-0 w-full max-w-sm custom-shadow bg-[#a6ddf0]">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <p className='text-center text-black text-xl lg:text-3xl'>
                            <Typewriter
                                words={['Register Now🤗', 'Be Part', 'Of Something✨', 'Extraordinary🎈']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">First Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("first_name", { required: true })}
                                placeholder="user name"
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-700">First name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Last Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("last_name", { required: true })}
                                placeholder="user name"
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-700">Last name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo", { required: true })}
                                placeholder="photo url"
                                className="input input-bordered"
                            />
                            {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                {...register("email", { required: true })}
                                placeholder="email"
                                className="input input-bordered"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                {...register("password", {
                                    required: true,
                                    minLength: 6
                                })}
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'required' && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                name='confirmPassword'
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: value => value === password // Custom validation to check if the value matches the password field
                                })}
                                placeholder="confirm password"
                                className="input input-bordered"
                            />
                            {errors.confirmPassword?.type === 'required' && (
                                <p className="text-red-600">Please confirm your password</p>
                            )}
                            {errors.confirmPassword?.type === 'validate' && (
                                <p className="text-red-600">Passwords do not match</p>
                            )}
                        </div>
                        <div className=" mt-6">
                            <input type="submit" className="button-28" value="Sign Up" />
                        </div>
                    </form>
                    <p className="ms-7">{error}</p>
                    <p className="ms-7 my-3">Already Have Account? <Link className='text-blue-800' to='/login'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
