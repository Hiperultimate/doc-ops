import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageSlider.css";
import CrossSvg from "../../svgs/cross-bg.svg";
import Slider from "react-slick";

function ImageSlider({ imageList, editable }) {
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

  const onClickHandler = (imageLink) => {
    console.log(imageLink);
  };

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
                {editable && (
                  <div className="remove-img-btn">
                    <img
                      className="cross-svg"
                      src={CrossSvg}
                      alt="cross-icon"
                      onClick={() => onClickHandler(imageLink)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

ImageSlider.defaultProps = {
  editable: false,
};

export default ImageSlider;
