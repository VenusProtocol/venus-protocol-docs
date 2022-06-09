import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const MintWrapper = styled.div`
  margin-bottom: 50px;
`;

function MintVai() {
  const VBep20Formula = 'function mintVAI(uint mintVAIAmount) returns (uint)';
  const solidityFormula =
    'VAIController vaiController = VAIController(0x0040...);\nrequire(vToken.borrow(100) == 0, "got collateral and has vai mint rate?");';
  const web3Formula =
    'const vaiController = VAIController.at(0x0040...);\nawait vaiController.methods.mintVAI(50).send({from: 0xMyAccount});';
  return (
    <MintWrapper id="vaicontroller-mint-vai">
      <Label title marginBottom>
        MintVAI
      </Label>
      <Description>
        The mintVAI function mints and transfers VAI from the protocol to the
        user, and adds a borrow balance. The amount minted must be less than the
        user's <a href="unitroller#get-account-liquidity">Account Liquidity</a>{' '}
        and the mint vai limit.
      </Description>
      <SubSection>
        <Label marginBottom>VAIController</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account to which minted vai shall be transferred.
          </Parameter>
          <Parameter name="mintVAIAmount">
            : The amount of the VAI to be minted.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an{' '}
            <a href="#vaicontroller-error-codes">Error code</a>
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
    </MintWrapper>
  );
}

export default MintVai;
