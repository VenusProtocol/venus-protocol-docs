import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const EthereumMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function EthereumMethods() {
  return (
    <EthereumMethodsWrapper id="venusJS-ethereum-methods">
      <Label title marginBottom>
        BSC Methods
      </Label>
      <Description>
        These methods facilitate interactions with the BSC blockchain.
      </Description>
    </EthereumMethodsWrapper>
  );
}

export default EthereumMethods;
