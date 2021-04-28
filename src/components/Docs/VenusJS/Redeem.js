import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const RedeemWrapper = styled.div`
  margin-bottom: 50px;
`;

function Redeem() {
  const formula = `  (async function() {
    const cDaiData = await Venus.api.vToken({
      "addresses": Venus.util.getAddress(Venus.cDAI)
    });
  
    console.log('cDaiData', cDaiData); // JavaScript Object
  })().catch(console.error);`;

  return (
    <RedeemWrapper id="venusJS-redeem">
      <Label title marginBottom>
        Redeem
      </Label>
      <Description>
        Redeems the user's BSC asset from the Venus Protocol.
      </Description>
      <ParameterSection>
        <Parameter name="asset">
          {` (string) A string of the asset to redeem, or its vToken name.`}
        </Parameter>
        <Parameter name="amount">
          {` (number | string | BigNumber) A string, number, or BigNumber object of the amount of an asset to redeem. Use the mantissa boolean in the options parameter to indicate if this value is scaled up (so there are no decimals) or in its natural scale. This can be an amount of vTokens or underlying asset (use the asset parameter to specify).`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the redeem transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </RedeemWrapper>
  );
}

export default Redeem;
