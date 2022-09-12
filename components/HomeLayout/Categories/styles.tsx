import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  // each column stretch out as much as possible - 6 columns
  grid-template-columns: repeat(6, minmax(0, 1fr));
  //create a gap in between columns
  gap: 25px;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Wrapper = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  background-color: rgba(249, 249, 249, 0.1);
  img {
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  }
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
  }
`;
