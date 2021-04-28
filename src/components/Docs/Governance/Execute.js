import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ExecuteWrapper = styled.div`
  margin-bottom: 50px;
`;

function Proppose() {
  const govFormula = `function execute(uint proposalId) payable returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\ngov.execute(proposalId).value(999).gas(999)();`;
  const web3Formula = `const tx = gov.methods.execute(proposalId).send({ from: sender, value: 1 });`;
  return (
    <ExecuteWrapper id="governance-execute">
      <Label title marginBottom>
        Execute
      </Label>
      <Description>
        After the Timelock delay period, any account may invoke the execute
        method to apply the changes from the proposal to the target contracts.
        This will invoke each of the actions described in the proposal.
      </Description>
      <Description>
        This function is payable so the Timelock contract can invoke payable
        functions that were selected in the proposal. E.g., A proposal can add
        reserves to a market like vBNB, set a vToken's interest rate model, or
        set risk parameters on the Unitroller.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of a succeeded proposal to execute.
          </Parameter>
          <Parameter name="RETURN">: No return, reverts on error.</Parameter>
        </ParameterSection>
      </SubSection>
      <SubSection>
        <Label marginBottom>Solidity</Label>
        <HighLighter>{solidityFormula}</HighLighter>
      </SubSection>
      <SubSection>
        <Label marginBottom>Web3 1.2.6</Label>
        <HighLighter>{web3Formula}</HighLighter>
      </SubSection>
    </ExecuteWrapper>
  );
}

export default Proppose;
