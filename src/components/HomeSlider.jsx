import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import homeImg from "../assets/images/home1.jpg";
import home1Img from "../assets/images/home.jpg";
import home2Img from "../assets/images/home2.jpg";
import home3Img from "../assets/images/home3.jpg";

const slides = [
  {
    id: 1,
    img: homeImg,
    title: "Men's Collection",
    desc: "Discover our latest range of stylish men's clothing and accessories.",
  },
  {
    id: 2,
    img: home1Img,
    title: "Women's Collection",
    desc: "Trendy outfits for every occasion. Look and feel amazing.",
  },
  {
    id: 3,
    img: home2Img,
    title: "Elegant Jewelry",
    desc: "Shine bright with our stunning collection of necklaces, rings, and bracelets.",
  },
  {
    id: 4,
    img: home3Img,
    title: "Electronics",
    desc: "Discover cutting-edge gadgets, smart devices, and must-have tech for your lifestyle.",
  },
];

const HomeSlider = () => {
  return (
    <div className="w-full h-[45vh] overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className="h-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 px-4 bg-black/30"></div>
              <div className="absolute inset-0 mx-4 flex flex-col items-start justify-center text-white px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="mt-2 md:mt-4 text-sm md:text-lg max-w-md">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
