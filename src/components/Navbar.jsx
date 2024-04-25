import { NavLink } from "react-router-dom";
import userImg from '../assets/images/user.png';



const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);

    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Home</span> </NavLink>
            </li>
            <li>
                <NavLink to="/a" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>About</span> </NavLink>
            </li>
            <li>
                <NavLink to="/b" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Feature</span> </NavLink>
            </li>
            <li>
                <NavLink to="/c" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Blog</span> </NavLink>
            </li>
            <NavLink to="/d" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF497C] border-b-4 border-[#FF497C]" : "hover:text-[#FF497C]"} > <span>Contact</span> </NavLink>
        </>
    );

    return (
        <div className="bg-neutral-100 [#191d5f]  fixed z-10 w-full shadow-md ">
            <div className="navbar flex justify-between lg:mx-16 ">
                <div className="navbar">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl gap-0 font-bold  lg:ml-28">Home<span className="text-[#F00]">Heaven</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-8 text-[18px] font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar  md:flex lg:flex space-x-4 lg:ml-72">
                    <div className="dropdown dropdown-end justify-center items-center">

                        <div className="hidden  lg:flex items-center md:space-x-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-28  py-2 pl-10 text-sm rounded-full border border-[#F00] sm:w-auto " />
                            </div>
                        </div>

                        {/* {user && (
                            <Tooltip
                                title={user && user.displayName ? user.displayName : "User name not found"}
                                position="left"
                                trigger="mouseenter"
                            >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user && user.displayName ? user.displayName : "User name not found"} src={user && user.photoURL ? user.photoURL : userImage} />
                                    </div>
                                </div>
                            </Tooltip>
                        )} */}
                    </div>
                 <div className="">
                 <img className="w-10 rounded-full ml-4 md:ml-20 lg:ml-0 " src={userImg} alt="" />
                 </div>
                    {/* {user ?
                        <button onClick={handleSignOut} className="btn ml-4 text-white bg-green-400">LOG OUT</button> :
                        <Link to='/login'>
                            <button className="btn ml-4 bg-green-400 text-white">LOG IN</button>
                        </Link>
                    } */}
                    <button className="hidden lg:flex bg-[#F00] px-6 py-3 font-bold rounded-md text-lg hover:bg-transparent border-2 border-[#F00] text-white hover:text-[#F00]">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;