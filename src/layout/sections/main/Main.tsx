import React from 'react';
import photo from '../../../assets/images/Ellipse-34girl.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <span>Nakul Kumar</span>
                    <span>Welcome</span>
                    <Name>I’m Nakul Kumar</Name>
                    <MainTitle>CEO , UXM Creative Studio</MainTitle>
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