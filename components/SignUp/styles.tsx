import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 5.6vw;
  position: relative;
  background: url("https://cnbl-cdn.bamgrid.com/assets/1df670c6d3924735911b194f57770d10857a333185b5515efe882a7efe48285a/original");
`;

export const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: flex-start;

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
  }
`;

export const DisneyLogo = styled.img`
  width: 50%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Headline = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: left;
  line-height: 1.5;
  @media (max-width: 650px) {
    text-align: center;
  }
`;
