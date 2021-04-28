import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const GetCurrentVotesWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetCurrentVotes() {
  const xvsFormula = `function getCurrentVotes(address account) returns (uint96)`;
  const solidityFormula = `XVS xvs = XVS(0x123...); // contract address\nxvs.getCurrentVotes(0xabc...);`;
  const web3Formula = `const account = '0x123...'; // contract address\nconst votes = await xvs.methods.getCurrentVotes(account).call();`;
  return (
    <GetCurrentVotesWrapper id="governance-get-current-votes">
      <Label title marginBottom>
        Get Current Votes
      </Label>
      <Description>
        Gets the balance of votes for an account as of the current block.
      </Description>
      <SubSection>
        <Label marginBottom>XVS</Label>
        <HighLighter>{xvsFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="account">
            : Address of the account in which to retrieve the number of votes.
          </Parameter>
          <Parameter name="RETURN">: The number of votes (integer).</Parameter>
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
    </GetCurrentVotesWrapper>
  );
}

export default GetCurrentVotes;
