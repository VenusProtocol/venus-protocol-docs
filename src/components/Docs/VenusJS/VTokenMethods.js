import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const VTokenMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function VTokenMethods() {
  return (
    <VTokenMethodsWrapper id="venusJS-vtoken-methods">
      <Label title marginBottom>
        vToken Methods
      </Label>
      <Description>
        These methods facilitate interactions with the vToken smart contracts.
      </Description>
    </VTokenMethodsWrapper>
  );
}

export default VTokenMethods;
