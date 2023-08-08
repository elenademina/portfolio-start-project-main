import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"youtubeSvg"}
                       title={"css3"}
                       description={"text1"}/>
                <Skill iconId={"instagramSvg"}
                       title={"html5"}
                       description={"text2"}/>
                <Skill iconId={"ballSvg"}
                       title={"React"}
                       description={"text3"}/>
                <Skill iconId={"qu1Svg"}
                       title={"typescript"}
                       description={"text4"}/>
                <Skill iconId={"qu2Svg"}
                       title={"styled components"}
                       description={"text5"}/>
                <Skill iconId={"facebookSvg"}
                       title={"WEB DESIgN"}
                       description={"text6"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #a5eaff;
  min-height: 100vh;
`