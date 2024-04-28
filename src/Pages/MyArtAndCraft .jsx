import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import image from '../assets/images/banner-4.jpg';



const MyArtAndCraft = () => {
    return (
        <div className="container mx-auto mt-8 mb-16 ">


          <div className="text-center">
          <select className="select select-error w-full max-w-xs mb-10 ">
                <option disabled selected>Customization</option>
                <option>Yes</option>
                <option>No</option>
            </select>
          </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className=" border rounded-lg">
                    <div className="flex space-x-4 p-6">
                        <div className="w-2/5">
                            <img className="rounded-xl" src={image} alt="" />
                        </div>
                        <div className="w-2/5 space-y-3">
                            <h4 className="text-xl font-bold">Item</h4>
                            <p> <span className="font-bold">Price: </span></p>
                            <p> <span className="font-bold">Rating: </span></p>
                            <p> <span className="font-bold">Customization:</span></p>
                            <p> <span className="font-bold">Stock Status: </span></p>
                        </div>
                        <div className="space-y-1 mt-6" >
                            <button className='flex w-28 bg-[#D2B48C] text-white  px-4 py-2 rounded-t-lg'> <span className="text-xl mr-2"><FaRegEye /></span>View</button>
                            <button className='flex w-28 bg-cyan-600 text-white  px-4 py-2 dark:bg-sky-500'> <span className="text-xl mr-2"><MdOutlineBrowserUpdated /></span>Update</button>
                            <button className='flex w-28 bg-[#EA4744] text-white  px-4 py-2 rounded-b-lg'> <span className="text-xl mr-2"><AiOutlineDelete /></span>  Delete</button>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default MyArtAndCraft;