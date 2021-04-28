import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const ReserveFactorWrapper = styled.div`
  margin-bottom: 50px;
`;

function ReserveFactor() {
  const vtokenFormula = 'function reserveFactorMantissa() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint reserveFactorMantissa = vToken.reserveFactorMantissa();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst reserveFactor = (await vToken.methods.reserveFactorMantissa().call()) / 1e18;';
  return (
    <ReserveFactorWrapper id="vtokens-reserve-factor">
      <Label title marginBottom>
        Reserve Factor
      </Label>
      <Description>
        The reserve factor defines the portion of borrower interest that is
        converted into <a href="#vtokens-total-reserves">reserves</a>.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The current reserve factor as an unsigned integer, scaled by 1e18.
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
    </ReserveFactorWrapper>
  );
}

export default ReserveFactor;
