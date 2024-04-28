import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import image from '../assets/images/banner-4.jpg';




const MyArtAndCraft = () => {
    return (
        <div className="container mx-auto mt-6 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className=" dark:bg-gray-100 dark:text-gray-800 border rounded-lg">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p- mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none ">
                            Painting and Drawing
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Description</p>
                        <p>Price: 1500</p>
                        <p>Rating:  4.5</p>
                        <p>customization: yes</p>
                        <p>In stock</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a className="flex btn px-8 py-2 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50  bg-slate-900 text-white items-end text-center">  <MdOutlineBrowserUpdated /> Update</a>
                            <a className="flex btn px-8 py-2 text-lg font-semibold border rounded dark:border-gray-800 bg-red-500 text-white items-center"><AiOutlineDelete />Delete</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" dark:bg-gray-100 dark:text-gray-800  border rounded-lg">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none ">
                            Painting and Drawing
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Description</p>
                        <p>Price: 1500</p>
                        <p>Rating:  4.5</p>
                        <p>customization: yes</p>
                        <p>In stock</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a className="flex btn px-8 py-2 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50  bg-slate-900 text-white items-end text-center">  <MdOutlineBrowserUpdated /> Update</a>
                            <a className="flex btn px-8 py-2 text-lg font-semibold border rounded dark:border-gray-800 bg-red-500 text-white items-center"><AiOutlineDelete />Delete</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyArtAndCraft;