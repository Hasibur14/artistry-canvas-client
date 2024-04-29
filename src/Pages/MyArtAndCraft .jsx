import { useContext, useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';



const MyArtAndCraft = () => {
    const [userArtCrafts, setUserArtCrafts] = useState([]);
    const [customizationFilter, setCustomizationFilter] = useState('all');
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


    const filteredArtCrafts = userArtCrafts.filter(artCraft => {
        if (customizationFilter === 'all') {
            return true;
        } else if (customizationFilter === 'yes') {
            return artCraft.customization === 'yes';
        } else if (customizationFilter === 'no') {
            return artCraft.customization === 'no';
        }
    });


    //Delete

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/artCraftDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = userArtCrafts.filter(coff => coff._id !== _id)
                            setUserArtCrafts(remaining)
                        }
                    })
            }
        });
    }



    return (
        <div className="container mx-auto mt-8 mb-16">
            <div className='text-center'>
                <h2 className='text-5xl font-bold'><LinearGradient gradient={['to left', '#F00 ,#DB0CCB']}>
                  My Listed Data
                    </LinearGradient></h2>
                    <br />
                    <h4 className='text-xl font-bold italic'> Data Sort by Customization base Categories!!</h4>
                   <br />
            </div>
            <div className="text-center">
                <select
                    className="select select-error w-full max-w-xs mb-10"
                    value={customizationFilter}
                    onChange={e => setCustomizationFilter(e.target.value)}
                >
                    <option value="all">Customization</option>
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {filteredArtCrafts.map(artCraft => (
                    <section key={artCraft._id} className="border-2 rounded-lg">
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

                                <Link to={`/artCraft/${artCraft._id}`} className='flex w-28 bg-[#D2B48C] text-white  px-4 py-2 rounded-t-lg'> <span className="text-xl mr-2"><FaRegEye /></span>View</Link>

                                <Link to={`/artCraftUpdate/${artCraft._id}`} className='flex w-28 bg-cyan-600 text-white  px-4 py-2 dark:bg-sky-500'> <span className="text-xl mr-2"><MdOutlineBrowserUpdated /></span>Update</Link>


                                <button onClick={() => handleDelete(artCraft._id)} className='flex w-28 bg-[#EA4744] text-white  px-4 py-2 rounded-b-lg'> <span className="text-xl mr-2"><AiOutlineDelete /></span>  Delete</button>

                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraft;
