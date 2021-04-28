import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const QuorumVotesWrapper = styled.div`
  margin-bottom: 50px;
`;

function QuorumVotes() {
  const govFormula = `function quorumVotes() public pure returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint quorum = gov.quorumVotes();`;
  const web3Formula = `const quorum = await gov.methods.quorumVotes().call();`;
  return (
    <QuorumVotesWrapper id="governance-quorum-votes">
      <Label title marginBottom>
        Quorum Votes
      </Label>
      <Description>
        The required minimum number of votes in support of a proposal for it to
        succeed.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The minimum number of votes required for a proposal to succeed.
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
    </QuorumVotesWrapper>
  );
}

export default QuorumVotes;
