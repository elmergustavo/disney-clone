import React from "react";
import { MovieListType } from "../../types/MovieList";
import FilmsRow from "../FilmsRow";
import Categories from "./Categories";
import SliderBanner from "./SliderBanner";
import { Container } from "./styles";

interface Props {
  movieResults: MovieListType[];
}

function HomeLayout({ movieResults }: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories />
      <h4>Recommended for You</h4>
      <FilmsRow movieResults={movieResults} category="recommend" />
      <h4>Trending</h4>
      <FilmsRow movieResults={movieResults} category="trending" />
      <h4>New for You</h4>
      <FilmsRow movieResults={movieResults} category="new" />
      <h4>Originals</h4>
      <FilmsRow movieResults={movieResults} category="original" addMargin />
    </Container>
  );
}

export default HomeLayout;
