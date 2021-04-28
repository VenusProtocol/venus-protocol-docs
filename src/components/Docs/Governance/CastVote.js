import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const CastVoteWrapper = styled.div`
  margin-bottom: 50px;
`;

function CastVote() {
  const govFormula = `function castVote(uint proposalId, bool support)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\ngov.castVote(proposalId, true);`;
  const web3Formula = `const tx = gov.methods.castVote(proposalId, false).send({ from: sender });`;
  return (
    <CastVoteWrapper id="governance-cast-vote">
      <Label title marginBottom>
        Cast Vote
      </Label>
      <Description>
        Cast a vote on a proposal. The account's voting weight is determined by
        the number of votes the account had delegated to it at the time the
        proposal state became active.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of a proposal in which to cast a vote.
          </Parameter>
          <Parameter name="support">
            : A boolean of true for 'yes' or false for 'no' on the proposal
            vote.
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
    </CastVoteWrapper>
  );
}

export default CastVote;
