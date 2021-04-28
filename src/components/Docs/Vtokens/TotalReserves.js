import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const TotalReservesWrapper = styled.div`
  margin-bottom: 50px;
`;

function TotalReserves() {
  const vtokenFormula = 'function totalReserves() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint reserves = vToken.totalReserves();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst reserves = (await vToken.methods.totalReserves().call());';
  return (
    <TotalReservesWrapper id="vtokens-total-reserves">
      <Label title marginBottom>
        Total Reserves
      </Label>
      <Description>
        Reserves are an accounting entry in each vToken contract that represents
        a portion of historical interest set aside as{' '}
        <a href="#vtokens-get-cash">cash</a> which can be withdrawn or
        transferred through the protocol's governance. A small portion of
        borrower interest accrues into the protocol, determined by the{' '}
        <a href="#vtokens-reserve-factor">reserve factor</a>.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The total amount of reserves held in the market.
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
    </TotalReservesWrapper>
  );
}

export default TotalReserves;
