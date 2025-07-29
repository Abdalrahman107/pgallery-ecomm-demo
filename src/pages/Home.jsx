import HomeSlider from "../components/HomeSlider";
import CategoriesSlider from "../components/CategoriesSlider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <section className="mb-10">
        <CategoriesSlider />
      </section>

      <section className="mt-10">
        <Products />
      </section>
    </div>
  );
};

export default Home;
