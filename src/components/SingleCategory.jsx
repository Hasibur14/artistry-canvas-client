import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { TbDetailsOff } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';
AOS.init();


const SingleCategory = () => {

    const { subcategory } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (subcategory) {
            fetch(`http://localhost:5000/art/${subcategory}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
        }
    }, [subcategory]);


    return (
        <div className="container mx-auto  mt-10 mb-20">
            <h2 className="text-2xl lg:text-3xl text-center font-bold mb-10"><span className='font-extrabold'>Category: </span>     {subcategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {items.map(item => (
                    <div key={item._id} className="w-full bg-white border shadow-lg rounded-xl p-6 dark:bg-[#1a2641d5]" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <div className="flex flex-col">
                            <div className="relative h-62 w-full mb-3">
                                <div className="absolute flex flex-col top-0 right-0 p-3">
                                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-[#FF497C] shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className=" h-[220px] w-full rounded-2xl dark:bg-[#0F172A]">
                                    <img

                                        src={item.image}
                                        alt=""
                                        className=" w-full h-full object-fill rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex flex-wrap ">

                                    <div className="w-full flex-none text-sm flex items-center text-gray-800 dark:text-gray-300 justify-between">
                                        <span className="mr-2 text-gray-600 dark:text-gray-300 font-extrabold text-xl hover:text-[#FF497C] ">
                                            {item.item}
                                        </span>

                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-500 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap mr-3">
                                                {item.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full justify-between min-w-0 ">
                                        <h2 className="text-xl mr-auto cursor-pointer text-gray-800 hover:text-[#FF497C] truncate font-semibold dark:text-white mt-5 mb-5 ">
                                            {item.subcategory}
                                        </h2>
                                        <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                            {item.stock}
                                        </div>
                                    </div>
                                </div>
                                <p>{item.description}</p>
                                <div className="text-lg text-gray-500 font-semibold mt-1">
                                <p>Process Time: {item.time}</p>
                                   <p> Price : {item.price}$</p>
                                   
                                </div>

                                <div className="flex space-x-2 text-sm font-medium justify-start mt-5">

                                    <Link to={`/artCraft/${item._id}`} className="transition flex-1 ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-white rounded py-2 md:py-1 text-center  flex justify-center items-center px-4 font-medium text-sm">
                                        <span className=" mr-2">
                                            <TbDetailsOff />
                                        </span>
                                        <span>Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleCategory;