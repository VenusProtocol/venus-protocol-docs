import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetAddressWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetAddress() {
  const formula = `  console.log('vBNB Address: ', Venus.util.getAddress(Venus.vBNB));`;

  return (
    <GetAddressWrapper id="venusJS-get-address">
      <Label title marginBottom>
        Get Address
      </Label>
      <Description>
        Gets the contract address of the named contract. This method supports
        contracts used by the Venus Protocol.
      </Description>
      <ParameterSection>
        <Parameter name="contract">
          {` (string) The name of the contract.`}
        </Parameter>
        <Parameter name="[network]">
          {` (string) Optional name of the BSC network. Main net and all the popular public test nets are supported.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns the address of the contract.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetAddressWrapper>
  );
}

export default GetAddress;
