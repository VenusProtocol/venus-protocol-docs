import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CloseFactorWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function CloseFactor() {
  const unitrollerFormula = 'function closeFactorMantissa() view returns (uint)';
  const solidityFormula = 'Unitroller troll = Unitroller(0xABCD...);\nuint closeFactor = troll.closeFactorMantissa();';
  const web3Formular = 'const troll = Unitroller.at(0xABCD...);\nconst closeFactor = await troll.methods.closeFactoreMantissa().call();';

  return (
    <CloseFactorWrapper id="unitroller-close-factor">
      <Label title marginBottom>
        Close Factor
      </Label>
      <Description>
        The percent, ranging from 0% to 100%, of a liquidatable account's borrow
        that can be repaid in a single liquidate transaction. If a user has
        multiple borrowed assets, the closeFactor applies to any single borrowed
        asset, not the aggregated value of a user’s outstanding borrowing.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="RETURN">
          : The closeFactor, scaled by 1e18, is multiplied by an outstanding
          borrow balance to determine how much could be closed.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </CloseFactorWrapper>
  );
}

export default CloseFactor;
