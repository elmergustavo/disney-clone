import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow: hidden;
  z-index: 3;
  color: ${(props) => props.theme.white};
`;

export const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

export const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export const LoginContainer = styled.div`
  //shift to end
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    text-decoration: none;

    &:after {
      content: "";
      height: 2px;
      background: ${(props) => props.theme.white};
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform-origin: left center;
    }
  }
  img {
    height: 20px;
    z-index: auto;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  position: fixed;
  top: 48px;
  right: 15px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
