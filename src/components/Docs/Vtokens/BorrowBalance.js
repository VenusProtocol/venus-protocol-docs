import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const BorrowBalanceWrapper = styled.div`
  margin-bottom: 50px;
`;

function BorrowBalance() {
  const vtokenFormula =
    'function borrowBalanceCurrent(address account) returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint borrows = vToken.borrowBalanceCurrent(msg.caller);';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst borrows = await vToken.methods.borrowBalanceCurrent(account).call();';
  return (
    <BorrowBalanceWrapper id="vtokens-borrow-balance">
      <Label title marginBottom>
        Borrow Balance
      </Label>
      <Description>
        A user who borrows assets from the protocol is subject to accumulated
        interest based on the current{' '}
        <a href="#vtokens-borrow-rate">borrow rate</a>. Interest is accumulated
        every block and integrations may use this function to obtain the current
        value of a user's borrow balance with interest.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="account">
            : The account which borrowed the assets.
          </Parameter>
          <Parameter name="RETURN">
            : The user's current borrow balance (with interest) in units of the
            underlying asset.
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
    </BorrowBalanceWrapper>
  );
}

export default BorrowBalance;
