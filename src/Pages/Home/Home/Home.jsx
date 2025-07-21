import OurMenu from "../../../components/OurMenu/OurMenu";
import RecommendChef from "../../../components/RecommendChef/RecommendChef";
import Testimonial from "../../../components/Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner/> 
            <Category/>
            <PopularMenu/>
            <RecommendChef/>
            <OurMenu/>
            <Testimonial/>
        </div>
    );
};

export default Home;