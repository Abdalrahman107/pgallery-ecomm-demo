import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import menImg from "../assets/images/men.jpg";
import womenImg from "../assets/images/women.jpg";
import electronicsImg from "../assets/images/elctronics.jpg";
import jewelleryImg from "../assets/images/jewellery.jpg";
const categories = [
  { id: 1, name: "Men's Clothing", img: menImg },
  { id: 2, name: "Women's Clothing", img: womenImg },
  { id: 3, name: "Jewelry", img: jewelleryImg },
  { id: 4, name: "Electronics", img: electronicsImg },
];

const CategoriesSlider = () => {
  return (
    <div className="w-[95%] h-[30vh] mx-auto dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        freeMode={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}>
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={cat.img} alt={cat.name} className="w-full h-36 object-cover" />
              <div className="p-3 text-center bg-gray-50 shadow-2xl dark:text-white dark:bg-gray-600">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
