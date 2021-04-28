/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const RepayBorrowWrapper = styled.div`
  margin-bottom: 50px;
`;

function RepayBorrow() {
  const VBep20Formula = 'function repayBorrow(uint repayAmount) returns (uint)';
  const VBnbFormula = 'function repayBorrow() payable';
  const solidityFormula =
    'VBnb vToken = VBnb(0x3FDB...);\nrequire(vToken.repayBorrow.value(100)() == 0, "transfer approved?");';
  const web3Formula =
    'const vToken = VBep20.at(0x3FDA...);\nvToken.methods.repayBorrow(10000).send({from: ...});';
  return (
    <RepayBorrowWrapper id="vtokens-repay-borrow">
      <Label title marginBottom>
        Repay Borrow
      </Label>
      <Description>
        The repay function transfers an asset into the protocol, reducing the
        user's borrow balance.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account which borrowed the asset, and shall repay the borrow.
          </Parameter>
          <Parameter name="borrowAmount">
            : The amount of the underlying borrowed asset to be repaid. A value
            of -1 (i.e. 2<sup>256</sup> - 1) can be used to repay the full amount.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an <a href="#vtokens-error-codes">Error code</a>
          </Parameter>
        </ParameterSection>
        <Description>
          Before repaying an asset, users must first{' '}
          <a href="https://eips.ethereum.org/EIPS/eip-20#approve">approve</a>{' '}
          the vToken to access their token balance.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>VBnb</Label>
        <HighLighter>{VBnbFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.value">
            : <span>payable</span> The amount of ether to be repaid, in wei.
          </Parameter>
          <Parameter name="msg.sender">
            : The amount which borrowed the asset, and shall repay the borrow
          </Parameter>
          <Parameter name="RETURN">: No return, reverts on error</Parameter>
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
    </RepayBorrowWrapper>
  );
}

export default RepayBorrow;
