import Slider from "react-slick";
import React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

function Title() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="container title">
      <div className="title-text">
        <h2>Karınca bizim işimiz...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi
          nesciunt voluptatibus labore distinctio facere eaque officia
          repellendus illum, ea eligendi corporis, repellat quaerat nobis dolor
          iusto, veritatis cum beatae?
        </p>
        <button>Ürünlerimiz</button>
      </div>
      <div className="title-image">
        <Slider {...settings}>
          <div>
            <img src="https://images2.alphacoders.com/461/thumb-1920-461861.jpg" />
          </div>
          <div>
            <img src="https://images2.alphacoders.com/461/thumb-1920-461861.jpg" />
          </div>
          <div>
            <img src="https://images2.alphacoders.com/461/thumb-1920-461861.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Title;
