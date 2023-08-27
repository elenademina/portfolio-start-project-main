import React from 'react';
import photo from '../../../assets/images/Ellipse-34girl.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <span>hi! everyone</span>
                    <MainTitle>Chris Lee brand designer</MainTitle>
                    <span>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</span>
                </div>
            </FlexWrapper>

            <Photo src={photo} alt=""/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #eee4e4;
`

const Photo = styled.img`
  width: 1920px;
  height: 993px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`

const Button=styled.button`

`