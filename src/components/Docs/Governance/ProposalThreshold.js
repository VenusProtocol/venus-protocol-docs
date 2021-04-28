import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ProposalThresholdWrapper = styled.div`
  margin-bottom: 50px;
`;

function ProposalThreshold() {
  const govFormula = `function proposalThreshold() returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint threshold = gov.proposalThreshold();`;
  const web3Formula = `const threshold = await gov.methods.proposalThreshold().call();`;
  return (
    <ProposalThresholdWrapper id="governance-proposal-threshold">
      <Label title marginBottom>
        Proposal Threshold
      </Label>
      <Description>
        The minimum number of votes required for an account to create a
        proposal.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The minimum number of votes required for an account to create a
            proposal.
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
    </ProposalThresholdWrapper>
  );
}

export default ProposalThreshold;
