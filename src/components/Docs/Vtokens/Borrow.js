/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const BorrowWrapper = styled.div`
  margin-bottom: 50px;
`;

function Borrow() {
  const VBep20Formula = 'function borrow(uint borrowAmount) returns (uint)';
  const solidityFormula =
    'VBnb vToken = VBnb(0x3FDB...);\nrequire(vToken.borrow(100) == 0, "got collateral?");';
  const web3Formula =
    'const vToken = VBep20.at(0x3FDA...);\nawait vToken.methods.borrow(50).send({from: 0xMyAccount});';
  return (
    <BorrowWrapper id="vtokens-borrow">
      <Label title marginBottom>
        Borrow
      </Label>
      <Description>
        The borrow function transfers an asset from the protocol to the user,
        and creates a borrow balance which begins accumulating interest based on
        the <a href="#vtokens-borrow-rate">Borrow Rate</a> for the asset. The
        amount borrowed must be less than the user's{' '}
        <a href="/docs/unitroller#get-account-liquidity">Account Liquidity</a>{' '}
        and the market's available liquidity.
      </Description>
      <Description>
        To borrow Ether, the borrower must be 'payable' (solidity).
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
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
    </BorrowWrapper>
  );
}

export default Borrow;
