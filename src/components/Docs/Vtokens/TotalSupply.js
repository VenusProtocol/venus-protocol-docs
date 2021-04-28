import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const TotalSupplyWrapper = styled.div`
  margin-bottom: 50px;
`;

function TotalSupply() {
  const vtokenFormula = 'function totalSupply() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint tokens = vToken.totalSupply();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst tokens = (await vToken.methods.totalSupply().call());';
  return (
    <TotalSupplyWrapper id="vtokens-total-supply">
      <Label title marginBottom>
        Total Supply
      </Label>
      <Description>
        Total Supply is the number of tokens currently in circulation in this
        vToken market. It is part of the EIP-20 interface of the vToken
        contract.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The total number of tokens in circulation for the market.
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
    </TotalSupplyWrapper>
  );
}

export default TotalSupply;
