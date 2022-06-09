import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';

const MarketMetadataWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }
`;

function MarketMetadata() {
  const unitrollerFormula = 'vToken[] public allMarkets;';
  const solidityFormula =
    'Unitroller troll = Unitroller(0xABCD...);\nvToken vTokens[] = troll.allMarkets();';
  const web3Formular =
    'const unitroller = new web3.eth.Contract(unitrollerAbi, unitrollerAddress);\nconst vTokens = await unitroller.methods.allMarkets().call();\nconst vToken = vTokens[0]; // address of a vToken';

  return (
    <MarketMetadataWrapper id="unitroller-market-metadata">
      <Label title marginBottom>
        Market Metadata
      </Label>
      <Description>
        The Unitroller contract has an array called allMarkets that contains the
        addresses of each vToken contract. Each address in the allMarkets array
        can be used to fetch a metadata struct in the Unitroller’s markets
        constant. See the{' '}
        <a
          href="https://github.com/SwipeWallet/venus-protocol/blob/master/contracts/ComptrollerStorage.sol"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noreferrer"
        >
          Unitroller Storage contract
        </a>{' '}
        for the Market struct definition.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </MarketMetadataWrapper>
  );
}

export default MarketMetadata;
