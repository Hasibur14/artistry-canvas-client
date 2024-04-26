import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import title from '../assets/images/title.png';
import userImg from '../assets/images/user.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
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
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {
                            links
                           }
                        </ul>
                    </div>
                    <a className="font-eb text-3xl gap-0 font-bold  lg:ml-28"> <img className="h-10 w-12" src={title} alt="" /> Artistry<span className="text-[#F00]">Canvas</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 space-x-8 text-[18px] font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar md:flex lg:flex space-x-4 lg:ml-36">
                    <div>
                       
                        {user && user.photoURL ? (
                            <img className="w-12 rounded-full" src={user.photoURL} alt="User" />
                        ) : (
                            <img className="w-12" src={userImg} alt="Default User" />
                        )}
                    </div>
                    <div className="hidden lg:flex">
                        {user ? (
                            <button onClick={handleSignOut} className="hidden lg:flex bg-[#F00] px-4 py-3 font-bold rounded-md text-lg hover:bg-transparent border-2 border-[#F00] text-white hover:text-[#F00]">LOG OUT</button>
                        ) : (
                            <Link to='/login'>
                                <button className="hidden lg:flex bg-[#F00] px-4 py-3 font-bold rounded-md text-lg hover:bg-transparent border-2 border-[#F00] text-white hover:text-[#F00]">LOG IN</button>
                            </Link>
                        )}
                    </div>
                    <div>
                        <Link to='/register'>
                            <button className="hidden lg:flex bg-transparent px-6 py-3 font-bold rounded-md text-lg hover:bg-[#F00] border-2 border-[#F00] text-[#F00] hover:text-white">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
