import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +91 9703393421'>+91 9703393421</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: bharathkalyan00@gmail.com'>bharathkalyan00@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Looks like learning by doing is the best way to learn something.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          
          <SocialIcons href="http://github.com">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="http://linkedin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
