import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const StateWrapper = styled.div`
  margin-bottom: 50px;
`;

function State() {
  const govFormula = `function state(uint proposalId) returns (ProposalState)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nGovernorAlpha.ProposalState state = gov.state(123);`;
  const web3Formula = `const proposalStates = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed'];\nconst proposalId = 123;\nresult = await gov.methods.state(proposalId).call();\nconst proposalState = proposalStates[result];`;
  return (
    <StateWrapper id="governance-state">
      <Label title marginBottom>
        State
      </Label>
      <Description>
        Gets the proposal state for the specified proposal. The return value,
        ProposalState is an enumerated type defined in the Governor Alpha
        contract.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of a proposal in which to get its state.
          </Parameter>
          <Parameter name="RETURN">
            : Enumerated type ProposalState. The types are Pending, Active,
            Canceled, Defeated, Succeeded, Queued, Expired, and Executed.
          </Parameter>
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
    </StateWrapper>
  );
}

export default State;
