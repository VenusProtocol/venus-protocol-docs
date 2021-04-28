import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ExchangeRateWrapper = styled.div`
  margin-bottom: 50px;
`;

function ExchangeRate() {
  const exchangeFormula =
    'exchangeRate = (getCash() + totalBorrows() - totalReserves()) / totalSupply()';
  const vtokenFormula = 'function exchangeRateCurrent() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint exchangeRateMantissa = vToken.exchangeRateCurrent();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst exchangeRate = (await vToken.methods.exchangeRateCurrent().call()) / 1e18;';
  return (
    <ExchangeRateWrapper id="vtokens-exchange-rate">
      <Label title marginBottom>
        Exchange Rate
      </Label>
      <Description>
        Each vToken is convertible into an ever increasing quantity of the
        underlying asset, as interest accrues in the market. The exchange rate
        between a vToken and the underlying asset is equal to:
      </Description>
      <HighLighter>{exchangeFormula}</HighLighter>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The current exchange rate as an unsigned integer, scaled by 1e18.
          </Parameter>
        </ParameterSection>
      </SubSection>
      <SubSection>
        <Label marginBottom>Solidity</Label>
        <HighLighter>{solidityFormula}</HighLighter>
      </SubSection>
      <SubSection>
        <Label marginBottom>Web3 1.0</Label>
        <HighLighter>{web3Formula}</HighLighter>
        <Description>
          Tip: note the use of call vs. send to invoke the function from
          off-chain without incurring gas costs.
        </Description>
      </SubSection>
    </ExchangeRateWrapper>
  );
}

export default ExchangeRate;
