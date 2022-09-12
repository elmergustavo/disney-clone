import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  display: block;
  top: 0px;
  padding: 0 calc(3.5vw + 5px);
  color: ${(props) => props.theme.white};
`;

export const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

export const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

export const AddButton = styled.button`
  border-radius: 50%;
  height: 44px;
  margin-right: 16px;
  width: 44px;
  display: flex;
  //vertical alignment
  align-items: center;
  //horizontal alignment
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

export const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

export const SubTitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

export const Description = styled.div`
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
  line-height: 1.4;
  max-width: 760px;
`;
