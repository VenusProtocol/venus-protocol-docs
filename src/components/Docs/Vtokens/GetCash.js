import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const GetCashWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetCash() {
  const vtokenFormula = 'function getCash() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint cash = vToken.getCash();';
  const web3Formula =
    'const vToken = vBnb.at(0x3FDB...);\nconst cash = (await vToken.methods.getCash().call());';
  return (
    <GetCashWrapper id="vtokens-get-cash">
      <Label title marginBottom>
        Get Cash
      </Label>
      <Description>
        Cash is the amount of underlying balance owned by this vToken contract.
        One may query the total amount of cash currently available to this
        market.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The quantity of underlying asset owned by the contract.
          </Parameter>
        </ParameterSection>
      </SubSection>
      <SubSection>
        <Label marginBottom>Solidity</Label>
        <HighLighter>{solidityFormula}</HighLighter>
      </SubSection>
      <SubSection>
        <Label marginBottom>Web3 1.0</Label>
        <HighLighter>{web3Formula}</HighLighter>
      </SubSection>
    </GetCashWrapper>
  );
}

export default GetCash;
