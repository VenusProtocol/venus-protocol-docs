import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetPriceWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetPrice() {
  const formula = `  const venus = new Venus(window.ethereum);
  let price;
  
  (async function () {
  
    price = await venus.getPrice(Venus.WBTC);
    console.log('WBTC in USD', price); // 6 decimals, see Open Price Feed docs
  
    price = await venus.getPrice(Venus.BAT, Venus.USDC); // supports vTokens too
    console.log('BAT in USDC', price);
  
  })().catch(console.error);`;

  return (
    <GetPriceWrapper id="venusJS-get-price">
      <Label title marginBottom>
        Get Price
      </Label>
      <Description>
        Gets an asset's price from the Venus Protocol open price feed. The price
        of the asset can be returned in any other supported asset value,
        including all vTokens and underlyings.
      </Description>
      <ParameterSection>
        <Parameter name="asset">
          {` (string) A string of a supported asset in which to find the current price.`}
        </Parameter>
        <Parameter name="[inAsset]">
          {` (string) A string of a supported asset in which to express the asset parameter's price. This defaults to USD.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns a string of the numeric value of the asset.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetPriceWrapper>
  );
}

export default GetPrice;
