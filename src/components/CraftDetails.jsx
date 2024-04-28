
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLoaderData } from 'react-router-dom';



const CraftDetails = () => {

    const craft = useLoaderData()
    const { image, item, subcategory, description, rating, customization, time, price, stock } = craft;


    return (
        <div className='container mx-auto my-10'>
            <section className="dark:bg-gray-100 border shadow-lg dark:text-gray-800">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/3 xl:w-2/5 dark:bg-blue-600 dark:text-gray-50">
                        <h2 className='text-3xl font-extrabold'> {item}</h2>
                        <h4 className='text-2xl font-bold'>{subcategory}</h4>
                        <p>{description}</p>
                        <p><span className='font-bold'>Customization:  </span> {customization}</p>
                        <p><span className='font-bold'>Processing Time:  </span> {time}</p>
                        <p><span className='font-bold'>Price:  </span> $ {price}</p>
                        <p><span className='font-bold'>Rating:  </span> {rating}</p>
                        <p><span className='font-bold'>Stock Status:  </span> {stock}</p>
                        <hr />
                        <Link to='/'> <button className='flex  bg-[#F00] text-white px-4 py-2 rounded-md'> <span className="text-xl mr-2"><IoArrowBackCircleOutline /></span>  Back</button></Link>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CraftDetails;