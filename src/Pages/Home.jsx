import ArtCraftCategories from "../components/ArtCraftCategories";
import Banner from "../components/Banner";
import CraftItems from "../components/CraftItems";
import CreativeVision from "../components/CreativeVision";



const Home = () => {
  return (
    <div className=" mx-auto">

      <Banner />
      <ArtCraftCategories></ArtCraftCategories>
      <CraftItems></CraftItems>
      <CreativeVision></CreativeVision>

    </div>

  );
};

export default Home;
