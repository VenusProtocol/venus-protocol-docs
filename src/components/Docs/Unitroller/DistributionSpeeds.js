import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const DistributionSpeedsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function DistributionSpeeds() {
  const rateFormular = 'utility = vTokenTotalBorrows * assetPrice\n\nutilityFraction = utility / sumOfAllVenusedMarketUtilities\n\nmarketVenusSpeed = venusRate * utilityFraction'
  const unitrollerFormula1 = 'function refreshVenusSpeeds(address account) public';
  const solidityFormula1 = 'Unitroller troll = Unitroller(0xABCD...);\ntroll.refreshVenusSpeeds();';
  const web3Formular1 = 'const unitroller = new web3.eth.Contract(unitrollerAbi, unitrollerAddress);\nawait unitroller.methods.refreshVenusSpeeds().send({ from: sender });';

  const unitrollerFormula2 = 'uint public venusRate;';
  const solidityFormula2 = 'Unitroller troll = Unitroller(0xABCD...);\n\n// XVS issued per block to suppliers OR borrowers * (1 * 10 ^ 18)\nuint venusRate = troll.venusRate();\n\n// Approximate XVS issued per day to suppliers OR borrowers * (1 * 10 ^ 18)\nuint venusRatePerDay = venusRate * 4 * 60 * 24;\n\n// Approximate XVS issued per day to suppliers AND borrowers * (1 * 10 ^ 18)\nuint venusRatePerDayTotal = venusRatePerDay * 2;';
  const web3Formular2 = 'const unitroller = new web3.eth.Contract(unitrollerAbi, unitrollerAddress);\n\nlet venusRate = await unitroller.methods.venusRate().call();\nvenusRate = venusRate / 1e18;\n\n// XVS issued to suppliers OR borrowers\nconst venusRatePerDay = venusRate * 4 * 60 * 24;\n\n// XVS issued to suppliers AND borrowers\nconst venusRatePerDayTotal = venusRatePerDay * 2;';

  const unitrollerFormula3 = 'mapping(address => uint) public venusSpeeds;';
  const solidityFormula3 = 'Unitroller troll = Unitroller(0x123...);\naddress vToken = 0xabc...;\n\n// XVS issued per block to suppliers OR borrowers * (1 * 10 ^ 18)\nuint venusSpeed = troll.venusSpeeds(vToken);\n\n// Approximate XVS issued per day to suppliers OR borrowers * (1 * 10 ^ 18)\nuint venusSpeedPerDay = venusSpeed * 4 * 60 * 24;\n\n// Approximate XVS issued per day to suppliers AND borrowers * (1 * 10 ^ 18)\nuint venusSpeedPerDayTotal = venusSpeedPerDay * 2;';
  const web3Formular3 = "const vTokenAddress = '0xabc...';\n\nconst unitroller = new web3.eth.Contract(unitrollerAbi, unitrollerAddress);\n\nlet venusSpeed = await unitroller.methods.venusSpeeds(vTokenAddress).call();\nvenusSpeed = venusSpeed / 1e18;\n\n// XVS issued to suppliers OR borrowers\nconst venusSpeedPerDay = venusSpeed * 4 * 60 * 24;\n\n// XVS issued to suppliers AND borrowers\nconst venusSpeedPerDayTotal = venusSpeedPerDay * 2;";

  return (
    <DistributionSpeedsWrapper id="unitroller-comp-distribution-speeds">
      <Label title marginBottom>
        Venus Distribution Speeds
      </Label>
      <Label title marginBottom>
        Venus Speed
      </Label>
      <Description>
        The “Venus speed” unique to each market is an unsigned integer that
        specifies the amount of XVS that is distributed, per block, to suppliers
        and borrowers in each market. As market conditions change, Venus speeds
        are updated to ensure XVS is distributed proportional to the utility of
        each market. Any user can call the Unitroller’s refreshVenusSpeeds
        method at any time in order to update market Venus speeds.
      </Description>
      <Description>
        The following is the formula for calculating the rate that XVS is distributed to each supported market.
      </Description>
      <HighLighter>{rateFormular}</HighLighter>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula1}</HighLighter>
      <ParameterSection>
        <Parameter name="RETURN">: None</Parameter>
        <Parameter name="events">
          : VenusSpeedUpdated - An event is emitted for each vToken with the
          address of the vToken and the new XVS distribution speed per block.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula1}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular1}</HighLighter>

      <Label title marginBottom>
        XVS Distributed Per Block (All Markets)
      </Label>
      <Description>
        The Unitroller Storage contract’s venusRate is an unsigned integer that
        indicates the rate at which the protocol distributes XVS to markets’
        suppliers or borrowers, every BSC block. The value is the amount of
        XVS (in wei), per block, allocated for the markets. Note that not every
        market has XVS distributed to its participants (see Market Metadata).
      </Description>
      <Description>
        The venusRate indicates how much XVS goes to the suppliers or borrowers,
        so doubling this number shows how much XVS goes to all suppliers and
        borrowers combined. The code examples implement reading the amount of
        XVS distributed, per BSC block, to all markets.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula2}</HighLighter>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula2}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular2}</HighLighter>

      <Label title marginBottom>
        XVS Distributed Per Block (Single Market)
      </Label>
      <Description>
        The Unitroller Storage contract has a mapping called venusSpeeds. It
        maps vToken addresses to an integer of each market’s XVS distribution
        per BSC block. The integer indicates the rate at which the protocol
        distributes XVS to markets’ suppliers or borrowers. The value is the
        amount of XVS (in wei), per block, allocated for the market. Note that
        not every market has XVS distributed to its participants (see Market
        Metadata).
      </Description>
      <Description>
        The speed indicates how much XVS goes to the suppliers or the borrowers,
        so doubling this number shows how much XVS goes to market suppliers and
        borrowers combined. The code examples implement reading the amount of
        XVS distributed, per BSC block, to a single market.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula3}</HighLighter>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula3}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular3}</HighLighter>
    </DistributionSpeedsWrapper>
  );
}

export default DistributionSpeeds;
