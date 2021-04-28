import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetBalanceWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetBalance() {
  const formula = `  (async function () {

    balance = await Venus.eth.getBalance(myAddress, provider);
    console.log('My BNB Balance', +balance);
  
  })().catch(console.error);`;

  return (
    <GetBalanceWrapper id="venusJS-get-balance">
      <Label title marginBottom>
        Get Balance
      </Label>
      <Description>
        Fetches the current Ether balance of a provided BSC address.
      </Description>
      <ParameterSection>
        <Parameter name="address">
          {` (string) The BSC address in which to get the BNB balance.`}
        </Parameter>
        <Parameter name="[provider]">
          {` (Provider | string) Optional BSC network provider. Defaults to Ethers.js fallback mainnet provider.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (BigNumber) Returns a BigNumber hexadecimal value of the BNB balance of the address.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetBalanceWrapper>
  );
}

export default GetBalance;
