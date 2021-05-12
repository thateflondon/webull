import React from "react";
import {
  NavbarContainer,
  NavbarWrap,
  Logo,
  Nav,
  NavLink,
  Search,
  SearchWrap,
  Input,
  ButtonContainer,
  Button,
} from "./NavbarElements";
import styled from "styled-components/macro";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button
            css={`
              color: #037cff;
              background: #fff;
            `}
          >
            SIGN UP
          </Button>
          <Button>SIGN IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
}

export default Navbar;
