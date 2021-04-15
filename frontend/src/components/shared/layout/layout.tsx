import React from "react";
import styled from "@emotion/styled";
import Theme from "../theme/theme";
import { FaDragon, FaSearch, FaUser, FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background: ${Theme.color.background.layout};
  margin-right: auto;
  margin-left: auto;
  top: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Nav = styled.div`
  position: sticky;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  z-index: 99999;
  height: 60px;
  top: 0;
  text-align: center;
  background: ${Theme.color.background.dark};
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(FaDragon)`
  color: ${Theme.color.main};
`;

const StyledLink = styled(Link)`
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  h3 {
    margin-left: 1rem;
    color: ${Theme.color.main};
  }
  :hover,
  active,
  visited {
    text-decoration: none;
  }
`;

const NavTabContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: end;
`;
const NavTab = styled.div`
  width: 100px;
  margin: auto;
  text-align: center;
  cursor: pointer;
`;

const Layout: React.FC = (props) => {
  return (
    <>
      <Nav>
        <StyledLink to="/">
          <Logo size={"45px"} />
          <h3>Fitness Portalen</h3>
        </StyledLink>
        <NavTabContainer>
          <NavTab>
            <StyledLink to="/">
              <FaSearch size={"30px"} color={Theme.color.main} />
            </StyledLink>
          </NavTab>
          <NavTab>
            <StyledLink to="/Browse">
              <FaDumbbell size={"30px"} color={Theme.color.main} />
            </StyledLink>
          </NavTab>
          <NavTab>
            <StyledLink to="/Trainer">
              <FaUser size={"30px"} color={Theme.color.main} />
            </StyledLink>
          </NavTab>
        </NavTabContainer>
      </Nav>
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
