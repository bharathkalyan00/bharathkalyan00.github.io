import React from 'react';
import { DiDlang, DiFirebase, DiGit, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have a decent command on Python. I am new to Web Development and am currently learning stuff.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>Languages</ListContainer>
        <ListParagraph>
          Python<br/>
          C<br/>
          JavaScript<br/>
          C++(beginner)<br/>
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          HTML<br/>
          CSS<br/>
          React.js(beginner)
        </ListParagraph>
      </ListItem>
      {/* <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
          Node.js(beginner)
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>Database</ListContainer>
        <ListParagraph>
          MongoDB
        </ListParagraph>
      </ListItem> */}
      <ListItem>
        <DiGit size="3rem"/>
        <ListContainer>Version Control</ListContainer>
        <ListParagraph>
          Git<br/>
          GitHub
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
