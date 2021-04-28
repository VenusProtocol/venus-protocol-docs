import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const EnterMarketsWrapper = styled.div`
  margin-bottom: 50px;
`;

function EnterMarkets() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function () {
    const trx = await venus.enterMarkets(Venus.BNB); // Use [] for multiple
    console.log('Ethers.js transaction object', trx);
  })().catch(console.error);`;

  return (
    <EnterMarketsWrapper id="venusJS-enter-markets">
      <Label title marginBottom>
        Enter Markets
      </Label>
      <Description>
        Enters the user's address into Venus Protocol markets.
      </Description>
      <ParameterSection>
        <Parameter name="markets">
          {` (any[]) An array of strings of markets to enter, meaning use those supplied assets as collateral.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction. A passed gasLimit will be used in both the approve (if not supressed) and mint transactions.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the enterMarkets transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </EnterMarketsWrapper>
  );
}

export default EnterMarkets;
