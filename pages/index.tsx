import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeLayout from "../components/HomeLayout";
import { MovieListType } from "../types/MovieList";

interface Props {
  movieResults: MovieListType[];
}

export default function Home({ movieResults }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // redirect to the homepage
      router.push({
        pathname: "/login",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (session)
    return (
      <>
        <HomeLayout movieResults={movieResults} />
      </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movieResults = await fetch(
    "https://movies-api-wine.vercel.app/api/movie"
  ).then((res) => res.json());

  return {
    props: {
      movieResults,
    },
  };
};
