import React from "react";
import {
  Section,
  Content,
  Left,
  Title,
  Description,
  Button,
} from "./HeroSectionElements";

function HeroSection() {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE Stocks <br /> valued up to $1850!
          </Title>
          <Description>
            Open and fund a brokerage account with $100 or more and you will
            have a chance of claiming stocks like <span>GOOG, FB, SBUX</span>
            {""} and more!
          </Description>
          <Button href="https://bit.ly/webull-join" target="_blank">
            <span>Claim your free stocks now</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
}

export default HeroSection;
