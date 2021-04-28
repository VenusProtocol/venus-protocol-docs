import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const QueueWrapper = styled.div`
  margin-bottom: 50px;
`;

function Queue() {
  const govFormula = `function queue(uint proposalId)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\ngov.queue(proposalId);`;
  const web3Formula = `const tx = gov.methods.queue(proposalId).send({ from: sender });`;
  return (
    <QueueWrapper id="governance-queue">
      <Label title marginBottom>
        Queue
      </Label>
      <Description>
        After a proposal has succeeded, any address can call the queue method to
        move the proposal into the Timelock queue. A proposal can only be queued
        if it has succeeded.
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
    </QueueWrapper>
  );
}

export default Queue;
