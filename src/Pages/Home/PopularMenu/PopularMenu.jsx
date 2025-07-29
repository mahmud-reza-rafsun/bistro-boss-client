import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto py-12">
        {
            popular.map((item) => <MenuItems key={item?._id} item={item}/>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
