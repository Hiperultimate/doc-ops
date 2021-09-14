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
  console.log(imageList);
  return (
    <div className="global-box-shadow box-attributes added-item">
      {imageList.length < 1 ? (
        <div>No uploaded images found</div>
      ) : (
        <Slider {...settings}>
          {imageList.map((imageLink) => {
            return (
              <div key={imageCount++}>
                <img
                  className="set-image"
                  src={`${imageLink}`}
                  alt="clinic-img"
                />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

export default ImageSlider;
