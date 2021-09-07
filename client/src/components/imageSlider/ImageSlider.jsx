import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageSlider.css";
import Slider from "react-slick";

function ImageSlider({ imageList }) {
  let imageCount = 0;
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    className: "slides",
  };
  return (
    <div className="global-box-shadow box-attributes added-item">
      <Slider {...settings}>
        {imageList.map((imageLink) => {
          return (
            <div key={imageCount++}>
              <img className="set-image" src={`${imageLink}`} alt=""/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
