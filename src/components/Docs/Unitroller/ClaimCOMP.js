import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const ClaimXVSWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }
`;

function ClaimXVS() {
  const unitrollerFormula =
    '// Claim all the XVS accrued by holder in all markets\nfunction claimVenus(address holder) public\n\n// Claim all the XVS accrued by holder in specific markets\nfunction claimVenus(address holder, vToken[] memory vTokens) public\n\n// Claim all the XVS accrued by specific holders in specific markets for their supplies and/or borrows\nfunction claimVenus(address[] memory holders, vToken[] memory vTokens, bool borrowers, bool suppliers) public';
  const solidityFormula =
    'Unitroller troll = Unitroller(0xABCD...);\ntroll.claimVenus(0x1234...);';
  const web3Formular =
    'const unitroller = new web3.eth.Contract(unitrollerAbi, unitrollerAddress);\nawait unitroller.methods.claimVenus("0x1234...").send({ from: sender });';

  return (
    <ClaimXVSWrapper id="unitroller-claim-xvs">
      <Label title marginBottom>
        Claim Venus
      </Label>
      <Description>
        Every Venus user accrues XVS for each block they are supplying to or
        borrowing from the protocol. The protocol automatically transfers
        accrued XVS to a user’s address when the total amount of XVS accrued
        that address (in a market) is greater than the claimVenusThreshold, and
        and the address executes any of the mint, borrow, transfer,
        liquidateBorrow, repayBorrow, or redeem functions on that market.
        Separately, users may call the claimVenus method on any vToken contract
        at any time for finer grained control over which markets to claim from.
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
    </ClaimXVSWrapper>
  );
}

export default ClaimXVS;
