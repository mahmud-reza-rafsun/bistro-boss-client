import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import soupCover from "../../../assets/menu/soup-bg.jpg";
import saladCover from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

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
        <title>Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        heading={"OUR MENU"}
        desc={"Would you like to try a dish? "}
      />
      <MenuCategory items={offered} />

    {/* dessert */}
      <Cover
        img={dessertCover}
        heading={"Dessert"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <MenuCategory items={desserts} />

        {/* pizza */}
      <Cover
        img={pizzaCover}
        heading={"Pizza"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <MenuCategory items={pizza} />

        {/* Soup */}
      <Cover
        img={soupCover}
        heading={"Soup"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <MenuCategory items={soup} />

        {/* Salad */}
      <Cover
        img={saladCover}
        heading={"Salad"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <MenuCategory items={salad} />
    </div>
  );
};

export default Menu;
