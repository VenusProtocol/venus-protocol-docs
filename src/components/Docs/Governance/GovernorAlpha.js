import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const GovernorAlphaWrapper = styled.div`
  margin-bottom: 50px;
`;

function GovernorAlpha() {
  return (
    <GovernorAlphaWrapper id="governance-governor-alpha">
      <Label title marginBottom>
        Governor Alpha
      </Label>
      <Description>
        Governor Alpha is the governance module of the protocol; it allows
        addresses with more than 300,000 XVS to propose changes to the protocol.
        Addresses that held voting weight, at the start of the proposal, invoked
        through the getpriorvotes function, can submit their votes during a 3
        day voting period. If a majority, and at least 600,000 votes are cast
        for the proposal, it is queued in the Timelock, and can be implemented
        after 2 days.
      </Description>
    </GovernorAlphaWrapper>
  );
}

export default GovernorAlpha;
