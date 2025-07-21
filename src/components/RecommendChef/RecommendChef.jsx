import SectionTitle from "../SectionTitle/SectionTitle";
import RecommendChefCard from "./RecommendChefCard";

const RecommendChef = () => {
  return (
    <div>
      <SectionTitle subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />
      <div className="w-11/12 mx-auto">
        <RecommendChefCard />
      </div>
    </div>
  );
};

export default RecommendChef;
