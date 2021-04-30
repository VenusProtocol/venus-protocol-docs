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

function RepayVai() {
  const VBep20Formula = 'function repayVAI(uint repayVAIAmount) returns (uint)';
  const solidityFormula =
    'VAIController vaiController = VAIController(0x0040...);\nrequire(vaiController.repayVAI.value(100)() == 0, "transfer approved?");';
  const web3Formula =
    'const vaiController = VAIController.at(0x0040...);\nvaiController.methods.repayVAI(10000).send({from: ...});';
  return (
    <RepayBorrowWrapper id="vaicontroller-repay-vai">
      <Label title marginBottom>
        RepayVAI
      </Label>
      <Description>
        The repay function transfers VAI into the protocol and burn, reducing
        the user's borrow balance.
      </Description>
      <SubSection>
        <Label marginBottom>VAIController</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account which minted the VAI, and shall repay the VAI.
          </Parameter>
          <Parameter name="borrowAmount">
            : The amount of the VAI to be repaid.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an{' '}
            <a href="#vaicontroller-error-codes">Error code</a>
          </Parameter>
        </ParameterSection>
        <Description>
          Before repaying an asset, users must first approve the VAI to access
          their VAI balance.
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
    </RepayBorrowWrapper>
  );
}

export default RepayVai;
