import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const ExitMarketWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }
`;

function ExitMarket() {
  const unitrollerFormula =
    'function exitMarket(address vToken) returns (uint)';
  const solidityFormula =
    'Unitroller troll = Unitroller(0xABCD...);\nvToken[] memory vTokens = new vToken[](2);\nvTokens[0] = CErc20(0x3FDA...);\nvTokens[1] = CEther(0x3FDB...);\nuint[] memory errors = troll.enterMarkets(vTokens);';
  const web3Formular =
    'const troll = Unitroller.at(0xABCD...);\nconst vTokens = [CErc20.at(0x3FDA...), CEther.at(0x3FDB...)];\nconst errors = await troll.methods.enterMarkets(vTokens).send({from: ...});';

  return (
    <ExitMarketWrapper id="unitroller-exit-market">
      <Label title marginBottom>
        Exit Market
      </Label>
      <Description>
        Exit a market - it is not an error to exit a market which is not
        currently entered. Exited markets will not count towards account
        liquidity calculations.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="msg.sender">
          : The account which shall exit the given market.
        </Parameter>
        <Parameter name="vTokens">
          : The addresses of the vToken market to exit.
        </Parameter>
        <Parameter name="RETURN">
          : 0 on success, otherwise an
          <a href="#unitroller-error-codes">Error code</a>
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </ExitMarketWrapper>
  );
}

export default ExitMarket;
