import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const GovernanceMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function GovernanceMethods() {
  return (
    <GovernanceMethodsWrapper id="venusJS-governance-methods">
      <Label title marginBottom>
        Governance Methods
      </Label>
      <Description>
        These methods facilitate interactions with the Governor smart contract.
      </Description>
    </GovernanceMethodsWrapper>
  );
}

export default GovernanceMethods;
