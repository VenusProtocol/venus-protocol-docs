import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const GetActionsWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetActions() {
  const govFormula = `function getActions(uint proposalId) returns (uint proposalId) public view returns (address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint proposalId = 123;\n(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas) = gov.getActions(proposalId);`;
  const web3Formula = `const {0: targets, 1: values, 2: signatures, 3: calldatas} = gov.methods.getActions(proposalId).call();`;
  return (
    <GetActionsWrapper id="governance-get-actions">
      <Label title marginBottom>
        Get Actions
      </Label>
      <Description>
        Gets the actions of a selected proposal. Pass a proposal ID and get the
        targets, values, signatures and calldatas of that proposal.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="proposalId">
            : ID of a proposal in which to get its actions.
          </Parameter>
          <Parameter name="RETURN">
            : Reverts if the proposal ID is invalid. If successful, the
            following 4 references are returned.
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
    </GetActionsWrapper>
  );
}

export default GetActions;
