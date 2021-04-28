import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const BorrowRateWrapper = styled.div`
  margin-bottom: 50px;
`;

function BorrowRate() {
  const vtokenFormula = 'function borrowRatePerBlock() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint borrowRateMantissa = vToken.borrowRatePerBlock();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst borrowRate = (await vToken.methods.borrowRatePerBlock().call()) / 1e18;';
  return (
    <BorrowRateWrapper id="vtokens-borrow-rate">
      <Label title marginBottom>
        Borrow Rate
      </Label>
      <Description>
        At any point in time one may query the contract to get the current
        borrow rate per block.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The current borrow rate as an unsigned integer, scaled by 1e18.
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
    </BorrowRateWrapper>
  );
}

export default BorrowRate;
