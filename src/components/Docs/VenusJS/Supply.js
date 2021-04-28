import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const SupplyWrapper = styled.div`
  margin-bottom: 50px;
`;

function Supply() {
  const formula = `  const venus = new Venus(window.ethereum);

  // Ethers.js overrides are an optional 3rd parameter for \`supply\`
  // const trxOptions = { gasLimit: 250000, mantissa: false };
  
  (async function() {
  
    console.log('Supplying BNB to the Venus Protocol...');
    const trx = await venus.supply(Venus.BNB, 1);
    console.log('Ethers.js transaction object', trx);
  
  })().catch(console.error);`;

  return (
    <SupplyWrapper id="venusJS-supply">
      <Label title marginBottom>
        Supply
      </Label>
      <Description>
        Supplies the user's BSC asset to the Venus Protocol.
      </Description>
      <ParameterSection>
        <Parameter name="asset">
          {` (string) A string of the asset to supply.`}
        </Parameter>
        <Parameter name="amount">
          {` (number | string | BigNumber) A string, number, or BigNumber object of the amount of an asset to supply. Use the mantissa boolean in the options parameter to indicate if this value is scaled up (so there are no decimals) or in its natural scale.`}
        </Parameter>
        <Parameter name="noApprove">
          {` (boolean) Explicitly prevent this method from attempting an ERC-20 approve transaction prior to sending the mint transaction.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction. A passed gasLimit will be used in both the approve (if not supressed) and mint transactions.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the supply transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </SupplyWrapper>
  );
}

export default Supply;
