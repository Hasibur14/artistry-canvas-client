import 'animate.css';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import image1 from '../assets/images/banner-1.jpg';
import image2 from '../assets/images/banner-2.jpg';
import image3 from '../assets/images/banner-3.jpg';
import image4 from '../assets/images/banner-4.jpg';

const Banner = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        const interval = setInterval(() => {
            if (swiper && swiper.activeIndex < swiper.slides.length - 1) {
                swiper.slideNext();
            } else {
                swiper.slideTo(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const textOverlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
    };

    const slideContentStyle = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '15px'
    };

    const gradientOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    };

    return (
        <div className="mt-6 p-2 lg:p-0 mb-10">
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-content" style={slideContentStyle}>
                        <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image1} alt="Slide 1" />
                        <div className="gradient-overlay" style={gradientOverlayStyle}></div>
                        <div className="text-overlay space-y-5" style={textOverlayStyle}>
                            <h2 className='text-2xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'> Elevating Your Artistic Journey - Explore, Create, and Inspire</h2>
                            <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#F00] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#F00] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-[#F00] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Explore Now </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content" style={slideContentStyle}>
                        <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image2} alt="Slide 2" />
                        <div className="gradient-overlay" style={gradientOverlayStyle}></div>
                        <div className="text-overlay space-y-5" style={textOverlayStyle}>
                            <h2 className='text-2xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'> Elevating Your Artistic Journey - Explore, Create, and Inspire</h2>
                            <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#F00] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#F00] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-[#F00] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Explore Now </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content" style={slideContentStyle}>
                        <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image3} alt="Slide 3" />
                        <div className="gradient-overlay" style={gradientOverlayStyle}></div>
                        <div className="text-overlay space-y-5" style={textOverlayStyle}>
                            <h2 className='text-2xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'> Elevating Your Artistic Journey - Explore, Create, and Inspire</h2>
                            <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#F00] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#F00] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-[#F00] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Explore Now </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content" style={slideContentStyle}>
                        <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image4} alt="Slide 4" />
                        <div className="gradient-overlay" style={gradientOverlayStyle}></div>
                        <div className="text-overlay space-y-5" style={textOverlayStyle}>
                            <h2 className='text-2xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'> Elevating Your Artistic Journey - Explore, Create, and Inspire</h2>
                            <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#F00] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#F00] rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-[#F00] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Explore Now </span>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
