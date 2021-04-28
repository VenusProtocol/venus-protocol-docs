import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const CollateralFactorWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  .bound {
    padding: 15px;
    border: 1px solid var(--color-yellow);
  }
`;

function CollateralFactor() {
  const unitrollerFormula = 'function markets(address vTokenAddress) view returns (bool, uint, bool)';
  const solidityFormula = 'Unitroller troll = Unitroller(0xABCD...);\n(bool isListed, uint collateralFactorMantissa, bool isXvsed) = troll.markets(0x3FDA...);';
  const web3Formular = 'const troll = Unitroller.at(0xABCD...);\nconst result = await troll.methods.markets(0x3FDA...).call();\nconst {0: isListed, 1: collateralFactorMantissa, 2: isXvsed} = result;';

  return (
    <CollateralFactorWrapper id="unitroller-collateral-factor">
      <Label title marginBottom>
        Collateral Factor
      </Label>
      <Description>
        A vToken's collateral factor can range from 0-90%, and represents the
        proportionate increase in liquidity (borrow limit) that an account
        receives by minting the vToken.
      </Description>
      <Description>
        Generally, large or liquid assets have high collateral factors, while
        small or illiquid assets have low collateral factors. If an asset has a
        0% collateral factor, it can't be used as collateral (or seized in
        liquidation), though it can still be borrowed.
      </Description>
      <div className="bound">
        <Description>
          Collateral factors can be increased (or decreased) through Venus
          Governance, as market conditions change.
        </Description>
      </div>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="vTokenAddress">
          : The address of the vToken to check if listed and get the collateral factor for.
        </Parameter>
        <Parameter name="RETURN">
          : Tuple of values (isListed, collateralFactorMantissa, isXvsed);
          isListed represents whether the unitroller recognizes this vToken;
          collateralFactorMantissa, scaled by 1e18, is multiplied by a supply
          balance to determine how much value can be borrowed. The isXvsed
          boolean indicates whether or not suppliers and borrowers are
          distributed XVS tokens.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </CollateralFactorWrapper>
  );
}

export default CollateralFactor;
