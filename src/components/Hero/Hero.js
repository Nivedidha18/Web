import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To
        <br />
        Nithya Journey!
      </SectionTitle>
      <SectionText>
        I have expertise in a wide range of programming languages, including Java, Python, Spring Boot, HTML/CSS, JavaScript, SQL, R ggplot2, and PHP. These languages enable me to develop robust and efficient software solutions across various domains. Additionally, I am experienced in using Linux and Shell scripting Bash/Zsh for automating tasks and managing systems. I am proficient in Tableau for data analysis and visualization, and I utilize Git, Bitbucket, and Trello for version control and collaboration. In terms of soft skills, I excel in time management, teamwork, problem-solving, and documentation. I have a logical and analytical mindset, allowing me to approach challenges with innovative solutions. With my natural leadership abilities and agile mindset, I can adapt to changing project requirements and deliver results efficiently. Effective communication, both written and verbal, is one of my strengths, enabling clear information exchange. I am skilled in multitasking and can handle multiple projects simultaneously. I am comfortable working under pressure and can maintain focus to deliver quality results. Building positive and collaborative relationships within a team is important to me, and I value interpersonal skills. Finally, I am confident in my ability to deliver engaging presentations that effectively communicate complex technical concepts to diverse audiences. Overall, I am a well-rounded technology professional with strong technical skills and personal attributes that make me capable of contributing effectively to software development projects.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://nivedidha18.github.io/Profile/')
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
