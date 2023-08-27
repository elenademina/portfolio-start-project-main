import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            {/*<Logo/>*/}
            <LogoText>Chris</LogoText>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #ceffa5;
  display: flex;
  justify-content: space-between;
`

const LogoText=styled.text`
  background-color: #ceffa5;
  display: flex;
  justify-content: space-between;
`