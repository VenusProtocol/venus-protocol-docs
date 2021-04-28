import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetABIWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetABI() {
  const formula = `  console.log('vBNB ABI: ', Venus.util.getAbi(Venus.vBNB));`;

  return (
    <GetABIWrapper id="venusJS-get-abi">
      <Label title marginBottom>
        Get ABI
      </Label>
      <Description>
        Gets a contract ABI as a JavaScript array. This method supports
        contracts used by the Venus Protocol.
      </Description>
      <ParameterSection>
        <Parameter name="contract">
          {` (string) The name of the contract.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (Array) Returns the ABI of the contract as a JavaScript array.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetABIWrapper>
  );
}

export default GetABI;
