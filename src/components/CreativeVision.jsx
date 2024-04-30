import title2 from '../assets/images/title2.png';

const CreativeVision = () => {
    return (
        <div className='my-24'>
            <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-5xl font-bold">Unleash Our Creative Vision</h3>
                <p className="w-[50%] mx-auto opacity-70">Step into our art and craft section, where creativity knows no bounds. Wander through a world of imagination and skill, where every stroke of a brush and every delicate stitch tells a story.!</p>
            </div>

            <div className="container mx-auto mt-20 p-2 md:p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-16 lg:gap-28">
                    <div className=" shadow-xl rounded-md p-8 border " data-aos="flip-left">
                        <div className="h-20 w-20 rounded-full bg-green-400 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Landscape Painting</h1>
                            <p className="opacity-80">Immerse yourself in natures beauty with our Landscape Painting collection. From majestic mountains to tranquil forests.</p>
                            <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Landscape Painting</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8 border" data-aos="flip-down">
                        <div className="h-20 w-20 rounded-full bg-pink-500 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Portrait Drawing</h1>
                            <p className="opacity-80">Portrait drawing is the art of capturing the likeness and personality of a person through the use of various drawing techniques.  </p>
                            <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Portrait Drawing</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8 border" data-aos="flip-right">
                        <div className="h-20 w-20 rounded-full bg-blue-400 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Watercolour Painting</h1>
                            <p className="opacity-80">
                                Watercolor painting is a versatile and expressive medium where pigments are suspended in water and applied to paper. Artists use brushes to create..</p>
                                <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Watercolour Painting</button>
                        </div>
                    </div>

                    <div className=" shadow-xl rounded-md p-8 border" data-aos="flip-left">
                        <div className="h-20 w-20 rounded-full bg-red-400 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Oil Painting</h1>
                            <p className="opacity-80">Oil painting is a traditional and versatile medium where pigments are mixed with oil, typically linseed oil, to create a viscous paint.</p>
                            <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Oil Painting</button>
                        </div>
                    </div>
                    <div className=" shadow-xl rounded-md p-8 border" data-aos="flip-down">
                        <div className="h-20 w-20 rounded-full bg-yellow-500 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Charcoal Sketching</h1>
                            <p className="opacity-80">Charcoal sketching is a dynamic and expressive drawing technique using charcoal sticks or pencils to create sketches on paper or other surfaces.</p>
                            <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Charcoal Sketching</button>
                        </div>
                    </div>
                    <div className=" shadow-xl rounded-md p-8 border " data-aos="flip-right">
                        <div className="h-20 w-20 rounded-full bg-purple-500 mx-auto flex items-center justify-center ">
                            <img className='w-12 h-12' src={title2} alt="" />
                        </div>
                        <div className="text-center space-y-4 ">
                            <h1 className="font-semibold text-xl">Cartoon Drawing</h1>
                            <p className="opacity-80">
                                Cartoon drawing is a stylized and simplified form of visual expression that often emphasizes humor, exaggeration, and caricature. </p>
                                <button className='btn p-3 bg-transparent w-full text-[#F00] border-2 border-[#F00] rounded-md'>Cartoon Drawing</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreativeVision;
