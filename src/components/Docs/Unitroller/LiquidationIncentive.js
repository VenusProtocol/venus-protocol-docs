import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const LiquidationIncentiveWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function LiquidationIncentive() {
  const unitrollerFormula = 'function liquidationIncentiveMantissa() view returns (uint)';
  const solidityFormula = 'Unitroller troll = Unitroller(0xABCD...);\nuint closeFactor = troll.liquidationIncentiveMantissa();';
  const web3Formular = 'const troll = Unitroller.at(0xABCD...);\nconst closeFactor = await troll.methods.liquidationIncentiveMantissa().call();';

  return (
    <LiquidationIncentiveWrapper id="unitroller-liquidation-incentive">
      <Label title marginBottom>
        Liquidation Incentive
      </Label>
      <Description>
        The additional collateral given to liquidators as an incentive to
        perform liquidation of underwater accounts. For example, if the
        liquidation incentive is 1.1, liquidators receive an extra 10% of the
        borrowers collateral for every unit they close.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="RETURN">
          : The liquidationIncentive, scaled by 1e18, is multiplied by the
          closed borrow amount from the liquidator to determine how much
          collateral can be seized.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </LiquidationIncentiveWrapper>
  );
}

export default LiquidationIncentive;
