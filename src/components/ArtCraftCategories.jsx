import { useEffect, useState } from "react";
import { MdOutlineExplore } from "react-icons/md";



const ArtCraftCategories = () => {

    const [categories, setCategories] = useState()

    useEffect((() => {
        fetch('http://localhost:5000/artCraftCategories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }), [])


    return (
        <div className='container mx-auto my-28'>
            <div className='text-center mb-10'>
                <h2 className="text-2xl lg:text-5xl font-bold">Browse By Art &Craft</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    categories?.map(craftCategory => (
                        <div key={craftCategory._id} className="w-full bg-white border shadow-lg rounded-xl p-6 dark:bg-[#1a2641d5]" data-aos="zoom-in"
                            data-aos-anchor-placement="center-bottom">
                            <div className="flex flex-col">
                                <div className="relative h-62 w-full mb-3">
                                    <div className="absolute flex flex-col top-5 right-0 p-3">
                                        <h4 className="text-">{craftCategory.subcategory}</h4>
                                    </div>
                                    <div className=" h-[220px] w-full rounded-2xl dark:bg-[#0F172A]">
                                        <img

                                            src={craftCategory.image}
                                            alt=""
                                            className=" w-full h-full object-fill rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <h4 className=" text-gray-600 dark:text-gray-300 font-extrabold text-xl hover:text-[#FF497C]">{craftCategory.subcategory}</h4>
                                            <button className="transition ease-in duration-300 bg-gray-800  text-[#FF497C] shadow hover:text-black hover:bg-red-500 hover:shadow-md  rounded-full w-8 h-8 text-center p-1">
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
                                        <p className=" text-gray-600 dark:text-gray-300">{craftCategory.description}</p>
                                    </div>
                                    <div className="btn  text-white bg-[#F00] hover:bg-violet-700 border-none w-full p-2 rounded-md text-center flex text-lg">
                                        <button>Explore </button>
                                        <span className=" text-xl"><MdOutlineExplore /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default ArtCraftCategories;