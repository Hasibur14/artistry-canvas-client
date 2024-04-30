import { Helmet } from "react-helmet";
import ArtCraftCategories from "../components/ArtCraftCategories";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import CraftItems from "../components/CraftItems";
import CreativeVision from "../components/CreativeVision";



const Home = () => {
  return (
    <div className=" mx-auto">
      <Helmet>
        <title>Home -Artistry Canvas</title>
      </Helmet>

      <Banner />
      <ArtCraftCategories></ArtCraftCategories>
      <CraftItems></CraftItems>
      <CreativeVision></CreativeVision>
      <ChooseUs></ChooseUs>

    </div>

  );
};

export default Home;
