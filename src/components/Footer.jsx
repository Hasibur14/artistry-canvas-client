import footerImg1 from '../assets/images/Frame (6).png';
import facebook from '../assets/images/facebook 1 (1).png';
import linkedIn from '../assets/images/linkedin.png';
import title from '../assets/images/title.png';
import twitter from '../assets/images/twitter (1) 1.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#191d5f]">
                <div className="  footer p-8 text-white">
                    <aside className="lg:space-y-3 ml-10 md:ml-10 lg:ml-44 ">
                        <div className="flex">
                            <img className="w-12 h-10" src={title} alt="" />
                            <h3 className="font-eb text-white text-4xl font-bold lg:ml-3">Art<span className="text-[#F00]">i</span>stry Canvas</h3>
                        </div>
                        <p className="text-lg font-bold opacity-75">FOLLOW US.</p>
                        <div className="flex space-x-3">
                           <img src={facebook} alt="" />
                           <img src={twitter} alt="" />
                           <img src={linkedIn} alt="" />
                        </div>
                    </aside>

                    <div className="flex ml-12 space-x-10 lg:space-x-72">
                        <nav>
                            <header className="footer-title  text-xl font-bold">Company</header>
                            <a className="link link-hover">About us</a><br />
                            <a className="link link-hover">Leadership</a><br />
                            <a className="link link-hover">Careers</a><br />
                            <a className="link link-hover">News & Article</a><br />
                            <a className="link link-hover">Legal Notice</a><br />
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title font-eb text-xl font-bold ">Support</header>
                            <a className="link link-hover">Help Center</a><br />
                            <a className="link link-hover">FAQ</a><br />
                            <a className="link link-hover">Ticket Support</a><br />
                            <a className="link link-hover">Contact Us</a>
                        </nav>
                    </div>
                    <nav className="lg:ml-28">
                        <header className="footer-title font-eb text-xl font-bold">Subscribe</header>
                        <p>Subscribe for our latest <br /> & Articles. We Won’t Give <br />You Spam Mails</p>
                        <div className="flex items-center justify-center border-none">
                            <input className="lg:w-48 h-10 lg:h-14 rounded-l-lg" type="text" placeholder="  Email Address" name="" id="" />

                            <button className="w-10 lg:w-16 h-10 lg:h-14 bg-[#F00]  rounded-r-lg  border-none hover:bg-pink-950"><img src={footerImg1} className='lg:ml-4' alt="" /></button>

                        </div>
                    </nav>
                </div>
                <div className='container mx-auto'>
                    <hr />
                </div>
                <div className="footer footer-center p-4 ">
                    <p className='text-white'>Copyright © 2024 - All right reserved by HASIB</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;