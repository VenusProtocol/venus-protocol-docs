import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const SupplyRateWrapper = styled.div`
  margin-bottom: 50px;
`;

function SupplyRate() {
  const vtokenFormula = 'function supplyRatePerBlock() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint supplyRateMantissa = vToken.supplyRatePerBlock();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst supplyRate = (await vToken.methods.supplyRatePerBlock().call()) / 1e18;';
  return (
    <SupplyRateWrapper id="vtokens-supply-rate">
      <Label title marginBottom>
        Supply Rate
      </Label>
      <Description>
        At any point in time one may query the contract to get the current
        supply rate per block. The supply rate is derived from the{' '}
        <a href="#vtokens-borrow-rate">borrow rate</a>,{' '}
        <a href="#vtokens-reserve-factor">reserve factor</a> and the amount of{' '}
        <a href="#vtokens-total-borrows">total borrows</a>.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The current supply rate as an unsigned integer, scaled by 1e18.
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
    </SupplyRateWrapper>
  );
}

export default SupplyRate;
