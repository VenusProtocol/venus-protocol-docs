import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const VotingDelayWrapper = styled.div`
  margin-bottom: 50px;
`;

function VotingDelay() {
  const govFormula = `function votingDelay() returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint blocks = gov.votingDelay();`;
  const web3Formula = `const blocks = await gov.methods.votingDelay().call();`;
  return (
    <VotingDelayWrapper id="governance-voting-delay">
      <Label title marginBottom>
        Voting Delay
      </Label>
      <Description>
        The number of BSC blocks to wait before voting on a proposal may begin.
        This value is added to the current block number when a proposal is
        created.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : Number of blocks to wait before voting on a proposal may begin.
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
    </VotingDelayWrapper>
  );
}

export default VotingDelay;
