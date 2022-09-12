import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./styles";

function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61F97E9098730C6E359AC4FDD76D9BC92B2433346909A818802A9B8EDB02AA97/compose?width=1440&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim"
          alt="badag"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/757BD50DDE15AEA20A1DBA02E4A7BEE497E14BB8B1E27217F6FEA384CD28256E/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
          alt="avengers"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C166EEA681E3AA1DF16788BDF7ED724D5D40E9D088CB7F52A1BFDC38BC63FE37/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"
          alt="badging"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7487B12724430E5DF3FBDBC9D1E1F9334674F469BA03CEFCFF700138773493C0/scale?width=1440&aspectRatio=3.91&format=jpeg"
          alt="scale"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7450DF0759679B9050CE04F4037CD56C4B1128DE2071FD7FE5EF58C90A8B0A65/scale?width=1440&aspectRatio=3.91&format=jpeg"
          alt="scales"
        />
      </Wrap>
    </Carousel>
  );
}

export default SliderBanner;
