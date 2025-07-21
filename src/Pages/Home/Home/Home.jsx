import OurMenu from "../../../components/OurMenu/OurMenu";
import RecommendChef from "../../../components/RecommendChef/RecommendChef";
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
        </div>
    );
};

export default Home;