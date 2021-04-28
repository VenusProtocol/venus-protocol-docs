import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const MarketHistoryWrapper = styled.div`
  margin-bottom: 50px;
`;

function MarketHistory() {
  const formula = `  (async function() {
    const vUsdcMarketData = await Venus.api.marketHistory({
      "asset": Venus.util.getAddress(Venus.vUSDC),
      "min_block_timestamp": 1559339900,
      "max_block_timestamp": 1598320674,
      "num_buckets": 10,
    });
  
    console.log('vUsdcMarketData', vUsdcMarketData); // JavaScript Object
  })().catch(console.error);`;

  return (
    <MarketHistoryWrapper id="venusJS-market-history">
      <Label title marginBottom>
        Market History
      </Label>
      <Description>
        Makes a request to the MarketHistoryService API. The market history
        service retrieves information about a market. For more details, see the
        Venus API documentation.
      </Description>
      <ParameterSection>
        <Parameter name="options">
          {` (object) A JavaScript object of API request parameters.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns the HTTP response body or error.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </MarketHistoryWrapper>
  );
}

export default MarketHistory;
