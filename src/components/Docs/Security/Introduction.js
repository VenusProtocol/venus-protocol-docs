import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const IntroductionWrapper = styled.div`
  margin-bottom: 50px;
`;

function Introduction() {
  return (
    <IntroductionWrapper id="security-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        The security of the Venus protocol is our highest priority; our
        development team, alongside third-party auditors and consultants, has
        invested considerable effort to create a protocol that we believe is
        safe and dependable. All contract code and balances are publicly
        verifiable, and security researchers are eligible for a bug bounty for
        reporting undiscovered vulnerabilities.
      </Description>
      <Description>
        We believe that size, visibility, and time are the true test for the
        security of a smart contract; please exercise caution, and make your own
        determination of security and suitability.
      </Description>
    </IntroductionWrapper>
  );
}

export default Introduction;
