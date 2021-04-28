import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const LiquidateBorrowWrapper = styled.div`
  margin-bottom: 50px;
`;

function LiquidateBorrow() {
  const VBep20Formula =
    'function liquidateBorrow(address borrower, uint amount, address collateral) returns (uint)';
  const VBnbFormula =
    'function liquidateBorrow(address borrower, address vTokenCollateral) payable';
  const solidityFormula =
    'VBnb vToken = VBnb(0x3FDB...);\nVBep20 vTokenCollateral = VBep20(0x3FDA...);\nrequire(vToken.liquidateBorrow.value(100)(0xBorrower, vTokenCollateral) == 0, "borrower underwater??");';
  const web3Formula =
    'const vToken = VBep20.at(0x3FDA...);\nconst vTokenCollateral = VBnb.at(0x3FDB...);\nawait vToken.methods.liquidateBorrow(0xBorrower, 33, vTokenCollateral).send({from: 0xLiquidator});';
  return (
    <LiquidateBorrowWrapper id="vtokens-liquidate-borrow">
      <Label title marginBottom>
        Liquidate Borrow
      </Label>
      <Description>
        A user who has negative{' '}
        <a href="docs/unitroller#get-account-liquidity">account liquidity</a> is
        subject to <a href="#liquidate-borrow">liquidation</a> by other users of
        the protocol to return his/her account liquidity back to positive (i.e.
        above the collateral requirement). When a liquidation occurs, a
        liquidator may repay some or all of an outstanding borrow on behalf of a
        borrower and in return receive a discounted amount of collateral held by
        the borrower; this discount is defined as the liquidation incentive.
      </Description>
      <Description>
        A liquidator may close up to a certain fixed percentage (i.e. close
        factor) of any individual outstanding borrow of the underwater account.
        Unlike in v1, liquidators must interact with each vToken contract in
        which they wish to repay a borrow and seize another asset as collateral.
        When collateral is seized, the liquidator is transferred vTokens, which
        they may redeem the same as if they had supplied the asset themselves.
        Users must approve each vToken contract before calling liquidate (i.e.
        on the borrowed asset which they are repaying), as they are transferring
        funds into the contract.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account which shall liquidate the borrower by repaying their
            debt and seizing their collateral.
          </Parameter>
          <Parameter name="borrower">
            : The account with negative account liquidity that shall be
            liquidated.
          </Parameter>
          <Parameter name="repayAmount">
            : The amount of the borrowed asset to be repaid and converted into
            collateral, specified in units of the underlying borrowed asset.
          </Parameter>
          <Parameter name="vTokenCollateral">
            : The address of the vToken currently held as collateral by a
            borrower, that the liquidator shall seize.
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
            : <span>payable</span> The amount of ether to be repaid and
            converted into collateral, in wei.
          </Parameter>
          <Parameter name="msg.sender">
            : The account which shall liquidate the borrower by repaying their
            debt and seizing their collateral.
          </Parameter>
          <Parameter name="borrower">
            : The account with negative account liquidity that shall be
            liquidated.
          </Parameter>
          <Parameter name="vTokenCollateral">
            : The address of the vToken currently held as collateral by a
            borrower, that the liquidator shall seize.
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
    </LiquidateBorrowWrapper>
  );
}

export default LiquidateBorrow;
