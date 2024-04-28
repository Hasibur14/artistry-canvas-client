import { useContext, useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { AuthContext } from '../Provider/AuthProvider';

const MyArtAndCraft = () => {
    const [userArtCrafts, setUserArtCrafts] = useState([]);
    const { user } = useContext(AuthContext) || {};

    useEffect(() => {

        if (user?.email) {
            fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    setUserArtCrafts(data)
                })
        }

    }, [user?.email]);

    return (
        <div className="container mx-auto mt-8 mb-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {userArtCrafts.map(artCraft => (
                    <section key={artCraft._id} className=" border rounded-lg">
                        <div className="flex space-x-6 p-6">
                            <div className="w-2/5 ">
                                <img className="rounded-xl w-full h-48" src={artCraft.image} alt="" />
                            </div>
                            <div className="w-2/5 space-y-3 ">
                                <h4 className="text-xl font-bold">{artCraft.subcategory}</h4>
                                <p> <span className="font-bold">Price: </span>{artCraft.price}</p>
                                <p> <span className="font-bold">Rating: </span>{artCraft.rating}</p>
                                <p> <span className="font-bold">Customization:</span>{artCraft.customization}</p>
                                <p> <span className="font-bold">Stock Status: </span>{artCraft.stock}</p>
                            </div>
                            <div className="space-y-1 mt-6" >
                                <button className='flex w-28 bg-[#D2B48C] text-white  px-4 py-2 rounded-t-lg'> <span className="text-xl mr-2"><FaRegEye /></span>View</button>
                                <button className='flex w-28 bg-cyan-600 text-white  px-4 py-2 dark:bg-sky-500'> <span className="text-xl mr-2"><MdOutlineBrowserUpdated /></span>Update</button>
                                <button className='flex w-28 bg-[#EA4744] text-white  px-4 py-2 rounded-b-lg'> <span className="text-xl mr-2"><AiOutlineDelete /></span>  Delete</button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraft;
