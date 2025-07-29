import ChefService from "../../../components/ChefService/ChefService";
import Contact from "../../../components/Contact/Contact";
import OurMenu from "../../../components/OurMenu/OurMenu";
import RecommendChef from "../../../components/RecommendChef/RecommendChef";
import Testimonial from "../../../components/Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <RecommendChef />
      <OurMenu />
      <Contact />
      <Testimonial />
    </div>
  );
};

export default Home;
