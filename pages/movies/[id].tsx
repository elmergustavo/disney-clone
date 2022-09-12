import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import FilmLayout from "../../components/FilmLayout";
import { MovieListType } from "../../types/MovieList";

interface Props {
  movieResults: MovieListType;
}

export default function MovieInformation({ movieResults }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // redirect to the login page
      router.push({
        pathname: "/login",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (session) return <FilmLayout movieResults={movieResults} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://movies-api-wine.vercel.app/api/movie");
  const movieData = await res.json();

  const paths = movieData?.map((movie: MovieListType) => ({
    params: { id: String(movie.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const movieResults = await fetch(
    `https://movies-api-wine.vercel.app/api/movies/${id}`
  ).then((res) => res.json());

  return {
    props: {
      movieResults,
    },
    revalidate: 1000,
  };
};
