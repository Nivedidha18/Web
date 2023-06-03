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
        I'm passionate about crafting innovative software solutions and building
        exceptional digital experiences. With a strong foundation in software
        development and problem-solving, I strive to create elegant and
        efficient solutions to real-world challenges.
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
