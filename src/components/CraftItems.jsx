import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import Craft from "./Craft";


const CraftItems = () => {
    const [art, setArt] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/artCraft')
            .then(res => res.json())
            .then(data => {
                setArt(data);
            });
    }, []);

    const handleClickSeeMore = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className="md:mt-28 p-2 rounded-t-[150px] border-t-4 border-[#F00]">
                <div className="text-center md:text-left mt-10">
                    <h2 className="text-2xl text-center lg:text-5xl font-bold dark:text-white">
                        Explore Art Craft
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 container mx-auto">
                    {art.slice(0, showAll ? art.length : 6).map(item => (
                        <Craft key={item._id} craft={item}></Craft>
                    ))}
                </div>
                {!showAll && (
                    <div className="text-center mt-10">
                        <button
                            className="btn bg-[#F00] text-white px-4"
                            onClick={handleClickSeeMore}
                        >
                            See More
                           <span className="text-2xl"> <GrFormNextLink /></span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CraftItems;
