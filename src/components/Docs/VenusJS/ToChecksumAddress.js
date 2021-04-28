import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const ToChecksumAddressWrapper = styled.div`
  margin-bottom: 50px;
`;

function ToChecksumAddress() {
  return (
    <ToChecksumAddressWrapper id="venusJS-to-checksum-address">
      <Label title marginBottom>
        To Checksum Address
      </Label>
      <Description>
        Applies the EIP-55 checksum to an BSC address.
      </Description>
      <ParameterSection>
        <Parameter name="_address">
          {` (string) The BSC address to apply the checksum.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns a string of the BSC address.`}
        </Parameter>
      </ParameterSection>
    </ToChecksumAddressWrapper>
  );
}

export default ToChecksumAddress;
