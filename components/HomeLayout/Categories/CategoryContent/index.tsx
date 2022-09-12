import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";

interface Props {
  video: string;
  defaultImage: string;
  name: string;
}

function CategoryContent({ video, defaultImage, name }: Props) {
  return (
    <HoverVideoPlayer
      videoSrc={video}
      pausedOverlay={<Image src={defaultImage} alt={name} layout="fill" />}
    />
  );
}

export default CategoryContent;
