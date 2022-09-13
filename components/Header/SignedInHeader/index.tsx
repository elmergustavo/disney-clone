import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { DropDown, NavMenu, SignOut, UserImg } from "../styles";
import Link from "next/link"

interface Props {
  session: Session;
}

function SignedInHeader({ session }: Props) {
  const image = session?.user?.image as string;
  console.log(image)
  const name = session?.user?.name as string;
  return (
    <>
      <NavMenu>
      <Link href="/">
      <a>
          <img src="/images/home-icon.png" alt="" />
          <span>HOME</span>
        </a>
      </Link>
      
        <a>
          <img src="/images/search-icon.png" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.png" alt="WatchList icon"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.png" alt="Originals icon"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.png" alt="Movie icon"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.png" alt="Series icon"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        {session !== null ? <UserImg src={image} alt={name} /> : null}
        <DropDown>
          <span onClick={() => signOut()}>SignOut</span>
        </DropDown>
      </SignOut>
    </>
  );
}

export default SignedInHeader;
