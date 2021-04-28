import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const ClaimXvsWrapper = styled.div`
  margin-bottom: 50px;
`;

function ClaimXvs() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function() {
  
    console.log('Claiming XVS...');
    const trx = await venus.claimXvs();
    console.log('Ethers.js transaction object', trx);
  
  })().catch(console.error);`;

  return (
    <ClaimXvsWrapper id="venusJS-claim-xvs">
      <Label title marginBottom>
        Claim XVS
      </Label>
      <Description>
        Create a transaction to claim accrued XVS tokens for the user.
      </Description>
      <ParameterSection>
        <Parameter name="[options]">
          {` (CallOptions) Options to set for a transaction and Ethers.js method overrides.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the vote transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </ClaimXvsWrapper>
  );
}

export default ClaimXvs;
