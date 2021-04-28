import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const CancelWrapper = styled.div`
  margin-bottom: 50px;
`;

function Cancel() {
  const govFormula = `function cancel(uint proposalId)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\ngov.cancel(proposalId);`;
  const web3Formula = `const tx = gov.methods.cancel(proposalId).send({ from: sender });`;
  return (
    <CancelWrapper id="governance-cancel">
      <Label title marginBottom>
        Cancel
      </Label>
      <Description>
        Cancel a proposal that has not yet been executed. The Guardian is the
        only one who may execute this unless the proposer does not maintain the
        delegates required to create a proposal. If the proposer does not have
        more delegates than the proposal threshold, anyone can cancel the
        proposal.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of a proposal that has succeeded.
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
    </CancelWrapper>
  );
}

export default Cancel;
