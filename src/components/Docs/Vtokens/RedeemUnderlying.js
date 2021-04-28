/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const RedeemUnderlyingWrapper = styled.div`
  margin-bottom: 50px;
`;

function RedeemUnderlying() {
  const vtokenFormula =
    'function redeemUnderlying(uint redeemAmount) returns (uint)';
  const solidityFormula =
    'VBnb vToken = VBnb(0x3FDB...);\nrequire(vToken.redeemUnderlying(50) == 0, "something went wrong");';
  const web3Formula =
    'const vToken = VBep20.at(0x3FDA...);\nvToken.methods.redeemUnderlying(10).send({from: ...});';
  return (
    <RedeemUnderlyingWrapper id="vtokens-redeem-underlying">
      <Label title marginBottom>
        Redeem Underlying
      </Label>
      <Description>
        The redeem underlying function converts vTokens into a specified
        quantity of the underlying asset, and returns them to the user. The
        amount of vTokens redeemed is equal to the quantity of underlying tokens
        received, divided by the current{' '}
        <a href="/docs/vtokens#exchange-rate">Exchange Rate</a>. The amount
        redeemed must be less than the user's{' '}
        <a href="/docs/unitroller#get-account-liquidity">Account Liquidity</a>{' '}
        and the market's available liquidity.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account to which redeemed funds shall be transferred.
          </Parameter>
          <Parameter name="redeemAmount">
            : The amount of underlying to be redeemed.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an{' '}
            <a href="#vtokens-error-codes">Error code</a>
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
      </SubSection>
    </RedeemUnderlyingWrapper>
  );
}

export default RedeemUnderlying;
