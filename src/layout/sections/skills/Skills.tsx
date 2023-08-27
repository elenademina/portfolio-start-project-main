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
                <Skill iconId={"code"}
                       title={"css3"}
                       description={"text1"}/>
                <Skill iconId={"css"}
                       title={"html5"}
                       description={"text2"}/>
                <Skill iconId={"react"}
                       title={"React"}
                       description={"text3"}/>
                <Skill iconId={"typeScript"}
                       title={"typescript"}
                       description={"text4"}/>
                <Skill iconId={"styled"}
                       title={"styled components"}
                       description={"text5"}/>
                <Skill iconId={"web"}
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