import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ProposeWrapper = styled.div`
  margin-bottom: 50px;
`;

function Proppose() {
  const govFormula = `function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) returns (uint)`;
  const solidityFormula = `GovernorAlpha gov = GovernorAlpha(0x123...); // contract address\nuint proposalId = gov.propose(targets, values, signatures, calldatas, description);`;
  const web3Formula = `const tx = gov.methods.propose(targets, values, signatures, calldatas, description).send({ from: sender });`;
  return (
    <ProposeWrapper id="governance-propose">
      <Label title marginBottom>
        Propose
      </Label>
      <Description>
        Create a Proposal to change the protocol. E.g., A proposal can set a
        vToken's interest rate model or risk parameters on the Unitroller.
      </Description>
      <Description>
        Proposals will be voted on by delegated voters. If there is sufficient
        support before the voting period ends, the proposal shall be
        automatically enacted. Enacted proposals are queued and executed in the
        Venus Timelock contract.
      </Description>
      <Description>
        The sender must hold more XVS than the current proposal threshold
        (proposalThreshold()) as of the immediately previous block. If the
        threshold is 300,000 XVS, the sender must have been delegated more than
        1% of all XVS in order to create a proposal. The proposal can have up to
        10 actions (based on proposalMaxOperations()).
      </Description>
      <Description>
        The proposer cannot create another proposal if they currently have a
        pending or active proposal. It is not possible to queue two identical
        actions in the same block (due to a restriction in the Timelock),
        therefore actions in a single proposal must be unique, and unique
        proposals that share an identical action must be queued in different
        blocks.
      </Description>
      <SubSection>
        <Label marginBottom>Governor Alpha</Label>
        <HighLighter>{govFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="targets">
            : The ordered list of target addresses for calls to be made during
            proposal execution. This array must be the same length as all other
            array parameters in this function.
          </Parameter>
          <Parameter name="values">
            : The ordered list of values (i.e. msg.value) to be passed to the
            calls made during proposal execution. This array must be the same
            length as all other array parameters in this function.
          </Parameter>
          <Parameter name="signatures">
            : The ordered list of function signatures to be passed during
            execution. This array must be the same length as all other array
            parameters in this function.
          </Parameter>
          <Parameter name="calldatas">
            : The ordered list of data to be passed to each individual function
            call during proposal execution. This array must be the same length
            as all other array parameters in this function.
          </Parameter>
          <Parameter name="description">
            : A human readable description of the proposal and the changes it
            will enact.
          </Parameter>
          <Parameter name="RETURN">
            : The ID of the newly created proposal.
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
    </ProposeWrapper>
  );
}

export default Proppose;
