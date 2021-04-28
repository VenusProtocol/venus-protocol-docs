import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const UtilityMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function UtilityMethods() {
  return (
    <UtilityMethodsWrapper id="venusJS-utility-methods">
      <Label title marginBottom>
        Utility Methods
      </Label>
      <Description>These methods are helpers for the Venus class.</Description>
    </UtilityMethodsWrapper>
  );
}

export default UtilityMethods;
