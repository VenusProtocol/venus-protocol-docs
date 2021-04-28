import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const CastVoteBySignatureWrapper = styled.div`
  margin-bottom: 50px;
`;

function CastVoteBySignature() {
  const govFormula = `function castVoteBySig(uint proposalId, bool support, uint8 v, bytes32 r, bytes32 s)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\ngov.castVoteBySig(proposalId, true, v, r, s);`;
  const web3Formula = `const tx = await gov.methods.castVoteBySig(proposalId, false, v, r, s).send({});`;
  return (
    <CastVoteBySignatureWrapper id="governance-cast-vote-by-signature">
      <Label title marginBottom>
        Cast Vote By Signature
      </Label>
      <Description>
        Cast a vote on a proposal. The account's voting weight is determined by
        the number of votes the account had delegated at the time that proposal
        state became active. This method has the same purpose as Cast Vote but
        it instead enables offline signatures to participate in Venus governance
        voting. For more details on how to create an offline signature, review
        EIP-712.
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
          <Parameter name="v">: The recovery byte of the signature.</Parameter>
          <Parameter name="r">: Half of the ECDSA signature pair.</Parameter>
          <Parameter name="s">: Half of the ECDSA signature pair.</Parameter>
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
    </CastVoteBySignatureWrapper>
  );
}

export default CastVoteBySignature;
