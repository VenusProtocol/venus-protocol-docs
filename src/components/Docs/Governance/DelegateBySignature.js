import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const DelegateBySignatureWrapper = styled.div`
  margin-bottom: 50px;
`;

function DelegateBySignature() {
  const xvsFormula =
    'function delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s)';
  const solidityFormula =
    'XVS xvs = XVS(0x123...); // contract address\nxvs.delegateBySig(delegateeAddress, nonce, expiry, v, r, s);';
  const web3Formula =
    'const tx = await xvs.methods.delegateBySig(delegateeAddress, nonce, expiry, v, r, s).send({});';
  return (
    <DelegateBySignatureWrapper id="governance-delegate-by-signature">
      <Label title marginBottom>
        Delegate By Signature
      </Label>
      <Description>
        Delegate votes from the signatory to the delegatee. This method has the
        same purpose as Delegate but it instead enables offline signatures to
        participate in Venus governance vote delegation. For more details on how
        to create an offline signature, review EIP-712.
      </Description>
      <SubSection>
        <Label marginBottom>XVS</Label>
        <HighLighter>{xvsFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="delegatee">
            : The address in which the sender wishes to delegate their votes to.
          </Parameter>
          <Parameter name="nonce">
            : The contract state required to match the signature. This can be
            retrieved from the contract’s public nonces mapping.
          </Parameter>
          <Parameter name="expiry">
            : The time at which to expire the signature. A block timestamp as
            seconds since the unix epoch (uint).
          </Parameter>
          <Parameter name="v">: The recovery byte of the signature.</Parameter>
          <Parameter name="r">: Half of the ECDSA signature pair.</Parameter>
          <Parameter name="s">: Half of the ECDSA signature pair.</Parameter>
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
    </DelegateBySignatureWrapper>
  );
}

export default DelegateBySignature;
