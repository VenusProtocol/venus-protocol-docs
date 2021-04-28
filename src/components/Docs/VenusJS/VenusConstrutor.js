import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const VenusConstructorWrapper = styled.div`
  margin-bottom: 50px;
`;

function VenusConstructor() {
  const formula = `  var venus = new Venus(window.ethereum); // web browser

  var venus = new Venus('http://127.0.0.1:8545'); // HTTP provider
  
  var venus = new Venus(); // Uses Ethers.js fallback mainnet (for testing only)
  
  var venus = new Venus('ropsten'); // Uses Ethers.js fallback (for testing only)
  
  // Init with private key (server side)
  var venus = new Venus('bsc_rpc_url', {
    privateKey: '0x_your_private_key_', // preferably with environment variable
  });
  
  // Init with HD mnemonic (server side)
  var venus = new Venus('mainnet' {
    mnemonic: 'clutch captain shoe...', // preferably with environment variable
  });`;

  return (
    <VenusConstructorWrapper id="venusJS-venus-constructor">
      <Label title marginBottom>
        Venus Constructor
      </Label>
      <Description>Creates an instance of the Venus.js SDK.</Description>
      <ParameterSection>
        <Parameter name="[provider]">
          {` (Provider | string) Optional BSC network provider. Defaults to Ethers.js fallback mainnet provider.`}
        </Parameter>
        <Parameter name="[options]">
          {` (object) Optional provider options.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an instance of the Venus.js SDK.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </VenusConstructorWrapper>
  );
}

export default VenusConstructor;
