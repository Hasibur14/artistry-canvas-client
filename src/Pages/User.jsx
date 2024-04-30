import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";


const User = () => {

    const { updateUserProfile, user } = useContext(AuthContext);

    const [username, setUsername] = useState(user.displayName || "");
    const [imageURL, setImageURL] = useState(user.photoURL || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(username, imageURL)
            .then(() => {
                toast.success("Profile updated successfully");

            })
            .catch((error) => {
                toast.error("Error updating profile:", error);
            });
    };




    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 dark:bg-gray-100 dark:text-gray-800 border-2 shadow-xl shadow-rose-400 mt-10">
             <Helmet>
                <title>User - Artistry Canvas</title>
            </Helmet>
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets User info!</h2>
                    <div className="dark:text-gray-600">View Your  user Information</div>
                </div>
                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user.photoURL
                        } alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{user.displayName
                            }</h2>

                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">{user.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                    <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">+008 1414 1415</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full rounded-full p-3"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Image URL</label>
                    <input
                        id="imageURL"
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder="Image URL"
                        className="w-full rounded-full p-3"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-white dark:border-2"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-[#F00] text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default User;
