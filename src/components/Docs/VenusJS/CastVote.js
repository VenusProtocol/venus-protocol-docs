import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CastVoteWrapper = styled.div`
  margin-bottom: 50px;
`;

function CastVote() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function() {
    const castVoteTx = await venus.castVote(12, true);
    console.log('Ethers.js transaction object', castVoteTx);
  })().catch(console.error);`;

  return (
    <CastVoteWrapper id="venusJS-cast-vote">
      <Label title marginBottom>
        Cast Vote
      </Label>
      <Description>Submit a vote on a Venus Governance proposal.</Description>
      <ParameterSection>
        <Parameter name="proposalId">
          {` (string) The ID of the proposal to vote on. This is an auto-incrementing integer in the Governor Alpha contract.`}
        </Parameter>
        <Parameter name="support">
          {` (boolean) A boolean of true for 'yes' or false for 'no' on the proposal vote.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Options to set for a transaction and Ethers.js method overrides.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the vote transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </CastVoteWrapper>
  );
}

export default CastVote;
