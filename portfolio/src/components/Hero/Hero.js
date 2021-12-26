import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        Welcome to my Personal Portfolio.
      </SectionTitle>
      <SectionText>
        I am, Bharath Kalyan. I am a 3rd year ECE student, and a beginner web developer.
      </SectionText>
      <Button onClick={()=>window.location = 'https://www.linkedin.com/in/bharath-k-807a61145/.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;