import Link from "next/link";
import React from "react";
import { MovieListType } from "../../types/MovieList";
import { Container, Content, Wrapper } from "./styles";

interface Props {
  movieResults: MovieListType[];
  category: string;
  addMargin?: boolean;
}

function FilmsRow({ movieResults, category, addMargin }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container addMargin={addMargin}>
      <Content {...settings}>
        {movieResults
          ?.filter((item) => item.type === category)
          ?.map((movie) => (
            <div>
              <Wrapper key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrapper>
            </div>
          ))}
      </Content>
    </Container>
  );
}

export default FilmsRow;
