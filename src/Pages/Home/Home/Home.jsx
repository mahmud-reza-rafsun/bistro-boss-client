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
        </div>
    );
};

export default Home;