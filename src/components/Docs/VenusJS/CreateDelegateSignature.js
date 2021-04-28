import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CreateDelegateSignatureWrapper = styled.div`
  margin-bottom: 50px;
`;

function CreateDelegateSignature() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async () => {
  
    const delegateSignature = await venus.createDelegateSignature('0xa0df350d2637096571F7A701CBc1C5fdE30dF76A');
    console.log('delegateSignature', delegateSignature);
  
  })().catch(console.error);`;

  return (
    <CreateDelegateSignatureWrapper id="venusJS-create-delegate-signature">
      <Label title marginBottom>
        Create Delegate Signature
      </Label>
      <Description>
        Create a delegate signature for Venus Governance using EIP-712. The
        signature can be created without burning gas. Anyone can post it to the
        blockchain using the delegateBySig method, which does have gas costs.
      </Description>
      <ParameterSection>
        <Parameter name="delegatee">
          {` (string) The address to delegate the user's voting rights to.`}
        </Parameter>
        <Parameter name="[expiry]">
          {` (number) The time at which to expire the signature. A block timestamp as seconds since the unix epoch. Defaults to 10e9.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an object that contains the v, r, and s components of an BSC signature as hexadecimal strings.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </CreateDelegateSignatureWrapper>
  );
}

export default CreateDelegateSignature;
