import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const LiquidateVaiWrapper = styled.div`
  margin-bottom: 50px;
`;

function LiquidateVai() {
  const VBep20Formula =
    'function liquidateVAI(address borrower, uint amount, address collateral) returns (uint)';
  const solidityFormula =
    'VAIController vaiController = VAIController(0x0040...);\nVBep20 vTokenCollateral = VBep20(0xfD58...);\nrequire(vToken.liquidateVAI(0xBorrower, 100, vTokenCollateral) == 0, "borrower underwater??");';
  const web3Formula =
    'const vaiController = VAIController.at(0x0040...);\nconst vTokenCollateral = VBep20.at(0xfD58...);\nawait vaiController.methods.liquidateVAI(0xBorrower, 33, vTokenCollateral).send({from: 0xLiquidator})';
  return (
    <LiquidateVaiWrapper id="vaicontroller-liquidate-vai">
      <Label title marginBottom>
        LiquidateVAI
      </Label>
      <Description>
        A user who has negative{' '}
        <a href="unitroller#get-account-liquidity">account liquidity</a> is
        subject to <a href="#vaicontroller-liquidate-vai">liquidation</a> by
        other users of the protocol to return his/her account liquidity back to
        positive (i.e. above the collateral requirement). When a liquidation
        occurs, a liquidator may repay some or all of an outstanding borrow on
        behalf of a borrower and in return receive a discounted amount of
        collateral held by the borrower; this discount is defined as the
        liquidation incentive.
      </Description>
      <Description>
        A liquidator may close up to a certain fixed percentage (i.e. close
        factor) of any individual outstanding borrow of the underwater account.
        Liquidators must interact with VAIUnitroller contract in which they wish
        to repay VAI and seize another asset as collateral. When collateral is
        seized, the liquidator is transferred vTokens, which they may redeem the
        same as if they had supplied the asset themselves. Users must approve
        VAI contract before calling liquidateVAI, as they are transferring funds
        into the contract.
      </Description>
      <SubSection>
        <Label marginBottom>VAIController</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account which shall liquidate the borrower by repaying their
            VAI and seizing their collateral.
          </Parameter>
          <Parameter name="borrower">
            : The account with negative account liquidity that shall be
            liquidated.
          </Parameter>
          <Parameter name="repayAmount">
            : The amount of the minted VAI to be repaid and converted into
            collateral.
          </Parameter>
          <Parameter name="vTokenCollateral">
            : The address of the vToken currently held as collateral by a
            borrower, that the liquidator shall seize.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an{' '}
            <a href="#vaicontroller-error-codes">Error code</a>
          </Parameter>
        </ParameterSection>
        <Description>
          Before supplying VAI, users must first approve the VAIController to
          access their VAI balance.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>Solidity</Label>
        <HighLighter>{solidityFormula}</HighLighter>
      </SubSection>
      <SubSection>
        <Label marginBottom>Web3 1.0</Label>
        <HighLighter>{web3Formula}</HighLighter>
      </SubSection>
    </LiquidateVaiWrapper>
  );
}

export default LiquidateVai;
