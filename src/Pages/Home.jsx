import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CraftItems from "../components/CraftItems";



const Home = () => {
  const craftItems = useLoaderData().slice(0, 6);

  return (
    <div className="container mx-auto">
      <Banner />
      <Categories />
     

      <div className="gadgetContainer md:mt-28  p-2 rounded-t-[150px] border-t-4 border-[#F00]">
        <div className="text-center md:text-left mt-10 ">
          <h2 className="text-2xl text-center lg:text-5xl lg:text-[40px] font-semibold dark:text-white">
            Explore Art & Craft
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 my-16">
        {craftItems.map(craftItem => (
          <CraftItems key={craftItem._id} craftItem={craftItem} />
        ))}
      </div>
    </div>
  );
};

export default Home;
