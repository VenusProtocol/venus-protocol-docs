import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetNetworkNameWithChainIDWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetNetworkNameWithChainID() {
  const formula = `  console.log('testnet : ', Venus.util.getNetNameWithChainId(97));`;

  return (
    <GetNetworkNameWithChainIDWrapper id="venusJS-get-network-name-with-chain-id">
      <Label title marginBottom>
        Get Network Name With Chain ID
      </Label>
      <Description>
        Gets the name of an BSC network based on its chain ID.
      </Description>
      <ParameterSection>
        <Parameter name="chainId">
          {` (string) The chain ID of the network.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns the name of the BSC network.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetNetworkNameWithChainIDWrapper>
  );
}

export default GetNetworkNameWithChainID;
