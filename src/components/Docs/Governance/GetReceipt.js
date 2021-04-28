import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const GetReceiptWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetReceipt() {
  const govFormula = `function getReceipt(uint proposalId, address voter) returns (Receipt memory)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nReceipt ballot = gov.getReceipt(proposalId, voterAddress);`;
  const web3Formula = `const proposalId = 11;\nconst voterAddress = '0x123...';\nconst result = await gov.methods.getReceipt(proposalId, voterAddress).call();\nconst { hasVoted, support, votes } = result;`;
  return (
    <GetReceiptWrapper id="governance-get-receipt">
      <Label title marginBottom>
        Get Receipt
      </Label>
      <Description>
        Gets a proposal ballot receipt of the indicated voter.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of the proposal in which to get a voter’s ballot receipt.
          </Parameter>
          <Parameter name="voter">
            : Address of the account of a proposal voter.
          </Parameter>
          <Parameter name="RETURN">
            : Reverts on error. If successful, returns a Receipt struct for the
            ballot of the voter address.
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
    </GetReceiptWrapper>
  );
}

export default GetReceipt;
