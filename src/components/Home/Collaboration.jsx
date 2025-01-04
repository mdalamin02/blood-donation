import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../public/Images/image1.jpg";
import image2 from "../../../public/Images/image2.jpg";
import image3 from "../../../public/Images/image3.jpg";
import image4 from "../../../public/Images/image4.jpg";
import image6 from "../../../public/Images/image6.jpg";
import image7 from "../../../public/Images/image7.jpeg";
import image8 from "../../../public/Images/image8.jpg";

function Collaboration() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true, // Centers the current slide
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="bg-white md:container md:mx-auto px-4">
      <div className=" py-8">
        <div className="font-bold text-center md:text-left text-2xl md:text-3xl mb-6">
          Our Collaboration
        </div>

        <div className="slider-container mt-10">
          <Slider {...settings} className="slick-slider ">
            <div className="px-5">
              <img src={image1} alt="" />
            </div>{" "}
            <div className="px-5">
              <img src={image2} alt="" />
            </div>{" "}
            <div className="px-5">
              <img src={image3} alt="" />
            </div>
            <div className="px-5">
              <img src={image4} alt="" />
            </div>
            <div className="px-5">
              <img src={image6} alt="" />
            </div>
            <div className="px-5">
              <img src={image7} alt="" />
            </div>
            <div className="px-5">
              <img src={image8} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
