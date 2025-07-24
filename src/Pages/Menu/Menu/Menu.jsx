import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import soupCover from "../../../assets/menu/soup-bg.jpg";
import saladCover from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        heading="Our Menu"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* main cover */}
      <SectionTitle subTitle={"Don't miss"} title={"TODAY'S OFFER"} />
      {/* offred menu items */}
      <MenuCategory items={offered} />
      {/* deseert items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertCover}
      />
      {/* Pizza */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaCover}
      />
      {/* soup */}
      <MenuCategory
        items={soup}
        title={"soup"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupCover}
      />
      {/* salad */}
      <MenuCategory
        items={salad}
        title={"salad"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladCover}
      />
    </div>
  );
};

export default Menu;
