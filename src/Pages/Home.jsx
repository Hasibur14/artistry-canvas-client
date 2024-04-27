import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CraftItems from "../components/CraftItems";


const Home = () => {

const craftItems = useLoaderData();

    return (
        <div className="container mx-auto">
          <Banner></Banner>
          <Categories></Categories>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-24">
            {
              craftItems.map(craftItem => <CraftItems key={craftItem._id} craftItem={craftItem} ></CraftItems>)
            }
          </div>
        </div>
    );
};

export default Home;