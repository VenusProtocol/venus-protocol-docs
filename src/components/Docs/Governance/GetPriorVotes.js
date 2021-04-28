import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const GetPriorVotesWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetPriorVotes() {
  const xvsFormula = `function getPriorVotes(address account, uint blockNumber) returns (uint96)`;
  const solidityFormula = `XVS xvs = XVS(0x123...); // contract address\nxvs.getPriorVotes(account, blockNumber);`;
  const web3Formula = `const priorVotes = await xvs.methods.getPriorVotes(account, blockNumber).call();`;
  return (
    <GetPriorVotesWrapper id="governance-get-prior-votes">
      <Label title marginBottom>
        Get Prior Votes
      </Label>
      <Description>
        Gets the prior number of votes for an account at a specific block
        number. The block number passed must be a finalized block or the
        function will revert.
      </Description>
      <SubSection>
        <Label marginBottom>XVS</Label>
        <HighLighter>{xvsFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="account">
            : Address of the account in which to retrieve the number of votes.
          </Parameter>
          <Parameter name="blockNumber">
            : The block number at which to retrieve the prior number of votes.
          </Parameter>
          <Parameter name="RETURN">: The number of prior votes.</Parameter>
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
    </GetPriorVotesWrapper>
  );
}

export default GetPriorVotes;
