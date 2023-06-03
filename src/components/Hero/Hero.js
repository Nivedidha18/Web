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
      <SectionText>Step into a world of continuous learning and innovation.I showcase my commitment to staying at the forefront of the ever-evolving software development landscape. With my strong foundation in Software Engineering and a hunger for knowledge, I bring fresh perspectives and cutting-edge solutions to the table. Join me on this journey of continuous improvement and let's push the boundaries of what's possible.
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
