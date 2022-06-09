import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';

const ExchangeRateWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }

  .description {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

function ExchangeRate() {
  const formula1 =
    'onevTokenInUnderlying = exchangeRateCurrent / (1  *  10  ^  (18  + underlyingDecimals - vTokenDecimals)';
  const formula2 =
    "const vTokenDecimals = 8; // all vTokens have 8 decimal places\nconst underlying = new web3.eth.Contract(bep20Abi, busdAddress);\nconst vToken = new web3.eth.Contract(vTokenAbi, vBusdAddress);\nconst underlyingDecimals = await underlying.methods.decimals().call();\nconst exchangeRateCurrent = await vToken.methods.exchangeRateCurrent().call();\nconst mantissa = 18 + parseInt(underlyingDecimals) - vTokenDecimals;\nconst onevTokenInUnderlying = exchangeRateCurrent / Math.pow(10, mantissa);\nconsole.log('1 vBUSD can be redeemed for', oneVTokenInUnderlying, 'BUSD');";
  const formula3 = 'underlyingTokens = vTokenAmount * oneVTokenInUnderlying';
  return (
    <ExchangeRateWrapper>
      <Label title marginBottom>
        Interpreting Exchange Rates
      </Label>
      <Description>
        The vToken{' '}
        <a href="/docs/vtokens#exchange-rate" target="_blank">
          Exchange Rates
        </a>{' '}
        is scaled by the difference in decimals between the vToken and the
        underlying asset.
      </Description>
      <HighLighter>{formula1}</HighLighter>
      <Description>
        Here is an example of finding the value of 1 vBUSD in BUSD with Web3.js
        JavaScript.
      </Description>
      <HighLighter>{formula2}</HighLighter>
      <Description>
        There is no underlying contract for BNB, so to do this with vBNB, set
        underlyingDecimals to 18.
      </Description>
      <Description>
        To find the number of underlying tokens that can be redeemed for
        vTokens, divide the number of vTokens by the above value
        oneVTokenInUnderlying.
      </Description>
      <HighLighter>{formula3}</HighLighter>
    </ExchangeRateWrapper>
  );
}

export default ExchangeRate;
