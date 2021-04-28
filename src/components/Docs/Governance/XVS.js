import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const XVSWrapper = styled.div`
  margin-bottom: 50px;
`;

function XVS() {
  return (
    <XVSWrapper id="governance-xvs">
      <Label title marginBottom>
        XVS
      </Label>
      <Description>
        XVS is an BEP-20 token that allows the owner to delegate voting rights
        to any address, including their own address. Changes to the owner’s
        token balance automatically adjust the voting rights of the delegate.
      </Description>
    </XVSWrapper>
  );
}

export default XVS;
