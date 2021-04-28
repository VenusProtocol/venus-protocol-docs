import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const DelegateWrapper = styled.div`
  margin-bottom: 50px;
`;

function Delegate() {
  const xvsFormula = 'function delegate(address delegatee)';
  const solidityFormula =
    'XVS xvs = XVS(0x123...); // contract address\nxvs.delegate(delegateeAddress);';
  const web3Formula =
    'const tx = await xvs.methods.delegate(delegateeAddress).send({ from: sender });';
  return (
    <DelegateWrapper id="governance-delegate">
      <Label title marginBottom>
        Delegate
      </Label>
      <Description>
        Delegate votes from the sender to the delegatee. Users can delegate to 1
        address at a time, and the number of votes added to the delegatee’s vote
        count is equivalent to the balance of XVS in the user’s account. Votes
        are delegated from the current block and onward, until the sender
        delegates again, or transfers their XVS.
      </Description>
      <SubSection>
        <Label marginBottom>XVS</Label>
        <HighLighter>{xvsFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="delegatee">
            : The address in which the sender wishes to delegate their votes to.
          </Parameter>
          <Parameter name="msg.sender">
            : The address of the XVS token holder that is attempting to delegate
            their votes.
          </Parameter>
          <Parameter name="RETURN">: No return, reverts on error.</Parameter>
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
    </DelegateWrapper>
  );
}

export default Delegate;
