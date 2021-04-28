import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const ExitMarketWrapper = styled.div`
  margin-bottom: 50px;
`;

function ExitMarket() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function () {
    const trx = await venus.exitMarket(Venus.BNB);
    console.log('Ethers.js transaction object', trx);
  })().catch(console.error);`;

  return (
    <ExitMarketWrapper id="venusJS-exit-market">
      <Label title marginBottom>
        Exit Market
      </Label>
      <Description>
        Exits the user's address from a Venus Protocol market.
      </Description>
      <ParameterSection>
        <Parameter name="market">
          {` (string) A string of the symbol of the market to exit.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction. A passed gasLimit will be used in both the approve (if not supressed) and mint transactions.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the exitMarket transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </ExitMarketWrapper>
  );
}

export default ExitMarket;
