import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const XVSMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function XVSMethods() {
  return (
    <XVSMethodsWrapper id="venusJS-xvs-method">
      <Label title marginBottom>
        XVS Method
      </Label>
      <Description>
        These methods facilitate interactions with the XVS token smart contract.
      </Description>
    </XVSMethodsWrapper>
  );
}

export default XVSMethods;
