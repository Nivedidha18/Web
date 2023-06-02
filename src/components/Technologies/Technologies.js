import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiCognizant, SiC } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a Master's student in Software Engineering with 2+ years of experience
      in various programming languages and technologies, my objective is to
      secure a Software Engineer/Java developer/Python Developer role where I
      can utilize my skills and experience to contribute to the development of
      innovative software solutions. I am eager to work in a dynamic and
      challenging environment that encourages continuous learning and
      professional growth. With my ability to write quality code under pressure
      and collaborate effectively with team members, I am confident in my
      ability to add value to any organization.
    </SectionText>
    <List>
      <ListItem>
        <CgWebsite size='3rem' />
        <ListContainer>
          <ListTitle>Front-End </ListTitle>
          <ListParagraph>
            Experience with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End </ListTitle>
          <ListParagraph>
            Experience with <br />
            Java and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCognizant size='3rem' />
        <ListContainer>
          <ListTitle>Software Engineer </ListTitle>
          <ListParagraph>
            Experience with <br />
            Cognizant
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
