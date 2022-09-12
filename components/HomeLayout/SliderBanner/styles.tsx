import styled from "styled-components";
import Slider from "react-slick";

export const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba (249, 249, 249, 0.8);
    }
  }
`;

export const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: ${(props) => props.theme.white};
    }
  }
  li.slick-active button:before {
    color: ${(props) => props.theme.white};
  }
  button {
    z-index: 1;
  }
  .slick-dots {
    bottom: 25px;
    text-align: right;
    padding-right: 20px;
  }

  .slick-dots li button:before {
    font-size: 10px;
  }

  .slick-next:before {
  }
  .slick-prev:before {
  }
`;
