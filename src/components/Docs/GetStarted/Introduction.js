import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const IntroductionWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }

  .description {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

function Introduction() {
  return (
    <IntroductionWrapper id="getstarted-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        These docs are a comprehensive guide to the Venus protocol, based on the
        Venus Whitepaper (Sep 2020). The protocol codebase is hosted on Github,
        and maintained by the community.
      </Description>
      <Description>
        Please join the #development in the Venus Community{' '}
        <a href="https://t.me/venusprotocol">Telegram</a>; our team, and members
        of the community, look forward to helping you build an application on
        top of Venus. Your questions help us improve, so please don't hesitate
        to ask if you can't find what you are looking for here.
      </Description>
    </IntroductionWrapper>
  );
}

export default Introduction;
