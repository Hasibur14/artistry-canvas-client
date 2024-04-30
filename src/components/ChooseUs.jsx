
import choose1 from '../assets/images/choose-us/1.webp';
import choose2 from '../assets/images/choose-us/2.webp';
import choose3 from '../assets/images/choose-us/4.webp';

const ChooseUs = () => {
    return (
        <div >
            <section className="container mx-auto my-10 lg:my-24 lg:mt-28 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl  lg:text-5xl font-bold">Why Choose Us</h2>
                    <p className="text-xl">High-quality craftsmanship is often a key factor. People want art and craft items that are well-made, durable, and aesthetically pleasing</p>
                </div>
                <div className="lg:flex justify-between space-y-8 lg:space-y-0">
                    <div className="bg-violet-200 lg:w-[48%] p-8 rounded-lg shadow-md space-y-6" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={choose1} alt="" />
                        <h2 className="text-3xl font-bold">Fast & Secure
                            Delivery</h2>
                        <p className='text-xl'> We prioritize efficiency and safety in every step of the delivery process, ensuring your orders reach you promptly and intact. With our commitment to speed and security, you can shop with peace of mind, knowing your items will arrive swiftly and in excellent condition </p>
                    </div>
                    <div className="bg-blue-200 lg:w-[48%] p-8 rounded-lg shadow-md space-y-6" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={choose2} alt="" />
                        <h2 className="text-3xl font-bold">24 Hour Return  Policy</h2>
                        <p className='text-xl'> This policy is often implemented by retailers or service providers to offer flexibility and assurance to customers who may have second thoughts about their purchase or who encounter issues shortly after buying a product or service.</p>
                    </div>
                </div>

                <div className="bg-fuchsia-200 lg:w-[48%] p-8 rounded-lg shadow-md space-y-6 lg:ml-[430px]" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={choose3} alt="" />
                    <h2 className="text-3xl font-bold">Next Level Pro Quality</h2>
                    <p className='text-xl'> It implies a dedication to achieving the highest standards in professionalism, craftsmanship, and service. Whether it refers to a product, service, or performance, it signifies a level of mastery and sophistication that sets it apart from the competition.  </p>
                </div>
            </section>
        </div>
    );
};

export default ChooseUs;