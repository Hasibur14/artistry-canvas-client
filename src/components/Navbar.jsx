import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import title from '../assets/images/title.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };

    const toggleHover = () => {
        setIsHovering(!isHovering);
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Home</span> </NavLink>
            </li>
            <li>
                <NavLink to="/allArtAndCraft" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Art & craft</span> </NavLink>
            </li>
            <li>
                <NavLink to="/AddCraft" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Add Craft </span> </NavLink>
            </li>
            <li>
                <NavLink to="/MyArtAndCraft" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>My Art&Craft</span> </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Gallery</span> </NavLink>
            </li>
            <li>
                <NavLink to="/user" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>User</span> </NavLink>
            </li>
        </>
    );


    return (
        <div className="bg-neutral-100 fixed z-10 w-full shadow-md">
            <div className="navbar flex justify-between lg:mx-16">
                <div className="navbar">
                    {/* Dropdown for mobile view */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32 space-y-2">
                            {links}

                            <div className="">
                                <Link to='/register'>
                                    <button className="bg-[#F00] p-2 font-bold rounded-md  text-white">Register</button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <a className=" text-xl lg:text-3xl mr-14 lg:mr-0 gap-0 font-bold  lg:ml-28"> <img className="h-10 w-12" src={title} alt="" /> Artistry<span className="text-[#F00]">Canvas</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-8 text-[18px] font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar md:flex lg:flex space-x-4 lg:ml-36">
                    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                        {/* Conditionally render user image */}
                        {user && user.photoURL ? (
                            <img className="w-12 rounded-full" src={user.photoURL} alt="User" />
                        ) : null}

                        {isHovering && user && (
                            <div className="absolute top-16 bg-white p-4 rounded-md shadow-md">
                                <p>{user.displayName}</p>
                                <button onClick={handleSignOut} className="bg-[#F00] px-4 py-2 mt-2 font-bold rounded-md text-lg text-white  border-2 ">LOG OUT</button>
                            </div>
                        )}
                    </div>
                    {/* Conditional rendering based on user authentication */}
                    <div className="hidden lg:flex">
                        {user ? (
                            <button onClick={handleSignOut} className="bg-[#F00] px-4 py-3 font-bold rounded-md text-lg hover:bg-transparent border-2 border-[#F00] text-white hover:text-[#F00]">LOG OUT</button>
                        ) : (
                            <Link to='/login'>
                                <button className="bg-[#F00] px-4 py-3 font-bold rounded-md text-lg hover:bg-transparent border-2 border-[#F00] text-white hover:text-[#F00]">LOG IN</button>
                            </Link>
                        )}
                    </div>
                    <div className="hidden lg:flex">
                        <Link to='/register'>
                            <button className="bg-transparent px-6 py-3 font-bold rounded-md text-lg text-[#F00] hover:bg-[#F00] border-2 border-[#F00] hover:text-white">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
