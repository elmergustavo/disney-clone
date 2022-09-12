import React from "react";
import CategoryContent from "./CategoryContent";
import { VideoData } from "./Data";
import { Container, Wrapper } from "./styles";

function Categories() {
  return (
    <Container>
      {VideoData?.map((item) => (
        <Wrapper key={item.id}>
          <CategoryContent
            video={item.video}
            defaultImage={item.imageUrl}
            name={item.name}
          />
        </Wrapper>
      ))}
    </Container>
  );
}

export default Categories;
