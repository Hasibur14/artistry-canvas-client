
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [showPassword, setShowPassword] = useState(false)

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result)
                toast.success('User login successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect email or password. Please try again.');
            });
    };

    // For Google 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                const user = result.user;
                console.log(user);
                setUser(loggedInUser)
                toast.success('User login successfully');
                navigate(location?.state ? location.state : '/');
              
            })
            .catch(error => {
                console.log('error', error.message)
                toast.error(error.message);
            })
    }

    // For Github:
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
                toast.success('User login successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }


    return (
        <div>
            <Helmet>
                <title></title>
            </Helmet>
            <div className="hero my-10">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-200 border-2">
                    <div>
                        <h2 className="text-2xl font-bold text-center mt-10">Login your account</h2>
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="mb-4 relative border-2">
                                <input
                                    className=" w-full bg-white rounded-xl p-2"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Your Password"
                                    id="" required />
                                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F00] text-white">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <div className="flex items-center w-full my-4 px-12">
                            <hr className="w-full dark:text-gray-600" />
                            <p className="px-3">OR</p>
                            <hr className="w-full " />
                        </div>
                        <div className="flex space-x-5 items-center justify-center text-center mb-6 px-10">
                            <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border-2 rounded-md focus:ring-2 focus:ring-[#F00] dark:border-[#F00] focus:dark:ring-[#F00]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                            <button onClick={handleGithubSignIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-[#F00] dark:border-[#F00] focus:dark:ring-[#F00]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                                <p>Login with GitHub</p>
                            </button>
                        </div>
                    </div>
                    <p className="text-center mb-6"> Do not have an account? <Link to='/register' className="text-red-500 font-semibold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;