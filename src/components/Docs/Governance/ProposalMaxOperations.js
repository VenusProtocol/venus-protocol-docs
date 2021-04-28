import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ProposalMaxOperationsWrapper = styled.div`
  margin-bottom: 50px;
`;

function ProposalMaxOperations() {
  const govFormula = `function proposalMaxOperations() returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint operations = gov.proposalMaxOperations();`;
  const web3Formula = `const operations = await gov.methods.proposalMaxOperations().call();`;
  return (
    <ProposalMaxOperationsWrapper id="governance-proposal-max-operations">
      <Label title marginBottom>
        Proposal Max Operations
      </Label>
      <Description>
        The maximum number of actions that can be included in a proposal.
        Actions are functions calls that will be made when a proposal succeeds
        and executes.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The maximum number of actions that can be included in a proposal.
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
    </ProposalMaxOperationsWrapper>
  );
}

export default ProposalMaxOperations;
