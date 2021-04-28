import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const UnitrollerMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function VToken() {
  return (
    <UnitrollerMethodsWrapper id="venusJS-unitroller-methods">
      <Label title marginBottom>
        Unitroller Methods
      </Label>
      <Description>
        These methods facilitate interactions with the Unitroller smart
        contract.
      </Description>
    </UnitrollerMethodsWrapper>
  );
}

export default VToken;
