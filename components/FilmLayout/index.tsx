import React from "react";
import { MovieListType } from "../../types/MovieList";
import {
  AddButton,
  Container,
  Controls,
  Description,
  GroupWatchButton,
  ImageTitle,
  PlayButton,
  SubTitle,
  TrailerButton,
} from "./styles";

interface Props {
  movieResults: MovieListType;
}

function FilmLayout({ movieResults }: Props) {
  return (
    <Container
      style={{
        backgroundImage: `url(${movieResults.backgroundImg})`,
        opacity: "0.8",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ImageTitle>
        <img src={movieResults.titleImg} alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movieResults.subTitle}</SubTitle>
      <Description>{movieResults.description}</Description>
    </Container>
  );
}

export default FilmLayout;
