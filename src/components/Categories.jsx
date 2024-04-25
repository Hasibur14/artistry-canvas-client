import title2 from '../assets/images/title2.png';

const Categories = () => {
    return (
        <div className="my-16">
            <div className="text-center space-y-4">
                <h3 className="text-5xl font-bold">Unleash Your Creative Vision</h3>
                <p className="w-[50%] mx-auto opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                    exercitationem architecto perferendis fuga pariatur accusantium omnis, tempore, id voluptatum illum
                    ut soluta corporis praesentium iure. Amet magni odio veniam eum!</p>
            </div>

            <div className="container mx-auto mt-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-16 lg:gap-28">
                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-green-400 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Landscape Painting</h1>
                            <p className="opacity-80">Immerse yourself in natures beauty with our Landscape Painting collection. From majestic mountains to tranquil forests, discover the perfect scene to bring your vision to life.</p>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-pink-500 mx-auto flex items-center justify-center ">
                        <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold">Portrait Drawing</h1>
                            <p className="opacity-65 w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                                cumque aliquid eaque.</p>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-blue-400 mx-auto flex items-center justify-center ">
                        <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold">Watercolour Painting</h1>
                            <p className="opacity-65 w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                                cumque aliquid eaque.</p>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-red-400 mx-auto flex items-center justify-center ">
                        <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold">Oil Painting</h1>
                            <p className="opacity-65 w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                                cumque aliquid eaque.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-yellow-500 mx-auto flex items-center justify-center ">
                        <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold">Charcoal Sketching</h1>
                            <p className="opacity-65 w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                                cumque aliquid eaque.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className=" shadow-xl rounded-md p-8">
                        <div className="h-20 w-20 rounded-full bg-purple-500 mx-auto flex items-center justify-center ">
                        <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold">Cartoon Drawing</h1>
                            <p className="opacity-65 w-56">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                                cumque aliquid eaque.</p>
                            <button>Read More</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Categories;