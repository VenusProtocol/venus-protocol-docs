import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CreateVoteSignatureWrapper = styled.div`
  margin-bottom: 50px;
`;

function CreateVoteSignature() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async () => {
  
    const voteForSignature = await venus.createVoteSignature(20, true);
    console.log('voteForSignature', voteForSignature);
  
    const voteAgainstSignature = await venus.createVoteSignature(20, false);
    console.log('voteAgainstSignature', voteAgainstSignature);
  
  })().catch(console.error);`;

  return (
    <CreateVoteSignatureWrapper id="venusJS-create-vote-signature">
      <Label title marginBottom>
        Create Vote Signature
      </Label>
      <Description>
        Create a vote signature for a Venus Governance proposal using EIP-712.
        This can be used to create an 'empty ballot' without burning gas. The
        signature can then be sent to someone else to post to the blockchain.
        The recipient can post one signature using the castVoteBySig method.
      </Description>
      <ParameterSection>
        <Parameter name="proposalId">
          {` (string) The ID of the proposal to vote on. This is an auto-incrementing integer in the Governor Alpha contract.`}
        </Parameter>
        <Parameter name="support">
          {` (boolean) A boolean of true for 'yes' or false for 'no' on the proposal vote. To create an 'empty ballot' call this method twice using true and then false for this parameter.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an object that contains the v, r, and s components of an BSC signature as hexadecimal strings.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </CreateVoteSignatureWrapper>
  );
}

export default CreateVoteSignature;
