import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CastVoteBySigWrapper = styled.div`
  margin-bottom: 50px;
`;

function CastVoteBySig() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function() {
    const castVoteTx = await venus.castVoteBySig(
      12,
      true,
      {
        v: '0x1b',
        r: '0x130dbcd2faca07424c033b4479687cc1deeb65f08509e3ab397988cc4c6f2e78',
        s: '0x1debcb8250262f23906b1177161f0c7c9aa3641e6bff5b6f5c88a6bb78d5d8cd'
      }
    );
    console.log('Ethers.js transaction object', castVoteTx);
  })().catch(console.error);`;

  return (
    <CastVoteBySigWrapper id="venusJS-cast-vote-by-sig">
      <Label title marginBottom>
        Cast Vote By Sig
      </Label>
      <Description>
        Submit a vote on a Venus Governance proposal using an EIP-712 signature.
      </Description>
      <ParameterSection>
        <Parameter name="proposalId">
          {` (string) The ID of the proposal to vote on. This is an auto-incrementing integer in the Governor Alpha contract.`}
        </Parameter>
        <Parameter name="support">
          {` (boolean) A boolean of true for 'yes' or false for 'no' on the proposal vote.`}
        </Parameter>
        <Parameter name="signature">
          {` (object) An object that contains the v, r, and, s values of an EIP-712 signature.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Options to set for a transaction and Ethers.js method overrides.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the vote transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </CastVoteBySigWrapper>
  );
}

export default CastVoteBySig;
