import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="font-WorkSans">

            <div className="h-20">
                <Navbar></Navbar>
            </div >
            <div className="min-h-[calc(100vh-365px)]">
                <Outlet ></Outlet>
            </div>

            <div >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;