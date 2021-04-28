import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const EnterMarketsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function EnterMarkets() {
  const unitrollerFormula = 'function enterMarkets(address[] calldata vTokens) returns (uint[] memory)';
  const solidityFormula = 'Unitroller troll = Unitroller(0xABCD...);\nvToken[] memory vTokens = new vToken[](2);\nvTokens[0] = CErc20(0x3FDA...);\nvTokens[1] = CEther(0x3FDB...);\nuint[] memory errors = troll.enterMarkets(vTokens);';
  const web3Formular = 'const troll = Unitroller.at(0xABCD...);\nconst vTokens = [CErc20.at(0x3FDA...), CEther.at(0x3FDB...)];\nconst errors = await troll.methods.enterMarkets(vTokens).send({from: ...});';

  return (
    <EnterMarketsWrapper id="unitroller-enter-markets">
      <Label title marginBottom>
        Enter Markets
      </Label>
      <Description>
        Enter into a list of markets - it is not an error to enter the same
        market more than once. In order to supply collateral or borrow in a
        market, it must be entered first.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="msg.sender">
          : The account which shall enter the given markets.
        </Parameter>
        <Parameter name="vTokens">
          : The addresses of the vToken markets to enter.
        </Parameter>
        <Parameter name="RETURN">
          : For each market, returns an error code indicating whether or not it
          was entered. Each is 0 on success, otherwise an{' '}
          <a href="#unitroller-error-codes">Error code</a>
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </EnterMarketsWrapper>
  );
}

export default EnterMarkets;
