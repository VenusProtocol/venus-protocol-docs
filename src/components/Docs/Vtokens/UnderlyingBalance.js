import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const UnderlyingBalanceWrapper = styled.div`
  margin-bottom: 50px;
`;

function UnderlyingBalance() {
  const vtokenFormula =
    'function balanceOfUnderlying(address account) returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint tokens = vToken.balanceOfUnderlying(msg.caller);';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst tokens = await vToken.methods.balanceOfUnderlying(account).call();';
  return (
    <UnderlyingBalanceWrapper id="vtokens-underlying-balance">
      <Label title marginBottom>
        Underlying Balance
      </Label>
      <Description>
        The user's underlying balance, representing their assets in the
        protocol, is equal to the user's vToken balance multiplied by the{' '}
        <a href="#vtokens-exchange-rate">Exchange Rate</a>.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="account">
            : The account to get the underlying balance of.
          </Parameter>
          <Parameter name="RETURN">
            : The amount of underlying currently owned by the account.
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
    </UnderlyingBalanceWrapper>
  );
}

export default UnderlyingBalance;
