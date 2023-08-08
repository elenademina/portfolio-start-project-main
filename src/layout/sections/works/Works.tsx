import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/magazine.webp"
import timerImg from "../../../assets/images/labels.webp"

const worksItems = ["All", "Landing page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>
                <Work title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                <Work title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #ffc3c3;
`