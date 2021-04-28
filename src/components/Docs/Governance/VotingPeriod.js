import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const VotingPeriodWrapper = styled.div`
  margin-bottom: 50px;
`;

function VotingPeriod() {
  const govFormula = `function votingPeriod() returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint blocks = gov.votingPeriod();`;
  const web3Formula = `const blocks = await gov.methods.votingPeriod().call();`;
  return (
    <VotingPeriodWrapper id="governance-voting-period">
      <Label title marginBottom>
        Voting Period
      </Label>
      <Description>
        The duration of voting on a proposal, in BSC blocks.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The duration of voting on a proposal, in BSC blocks.
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
    </VotingPeriodWrapper>
  );
}

export default VotingPeriod;
