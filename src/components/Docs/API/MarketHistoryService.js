import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import { SubSection } from 'components/Basic/Section';

const MarketHistoryServiceWrapper = styled.div`
  margin-bottom: 50px;

  .api-section {
    display: flex;
    align-items: center;

    .name {
      font-size: 20px;
      font-weight: 900;
      margin-right: 20px;
    }

    .desc {
      font-size: 20px;
      color: #aaaaaa;
    }
  }

  .table-section {
    overflow: auto;
  }

  .list-section {
    display: flex;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #aaaaaa;
    padding: 16px 32px;
    min-width: 600px;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 14px;
    }

    .type {
      width: 10%;
      font-weight: 900;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 25%;
      }
    }

    .key {
      width: 30%;
      color: #aaaaaa;
      word-break: break-all;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 25%;
      }
    }

    .desc {
      width: 60%;
      font-weight: 900;
      word-break: break-all;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 50%;
      }
    }
  }
`;

const requestList = [
  {
    type: 'bytes',
    key: 'asset',
    description: 'The requested asset'
  },
  {
    type: 'uint32',
    key: 'min_block_timestamp',
    description: 'Unix epoch time in seconds'
  },
  {
    type: 'uint32',
    key: 'max_block_timestamp',
    description: 'Unix epoch time in seconds'
  },
  {
    type: 'uint32',
    key: 'num_buckets',
    description: 'How many buckets to group data points in'
  },
  {
    type: 'string',
    key: 'network',
    description: 'The BSC network to use for the request'
  }
];

const responseList = [
  {
    type: 'Error',
    key: 'error',
    description: 'If set and non-zero, indicates an error returning data.'
  },
  {
    type: 'bytes',
    key: 'asset',
    description: 'The asset in question'
  },
  {
    type: 'Rate',
    key: 'supply_rates',
    description: 'The historical interest rates for suppliers'
  },
  {
    type: 'Rate',
    key: 'borrow_rates',
    description: 'The historical interest rates for borrowers'
  },
  {
    type: 'MarketTotal',
    key: 'total_supply_history',
    description: 'The historical total supply amounts for the market'
  },
  {
    type: 'MarketTotal',
    key: 'total_borrows_history',
    description: 'The historical total borrow amounts for the market'
  },
  {
    type: 'Rate',
    key: 'exchange_rates',
    description: 'The historical exchange rate'
  },
  {
    type: 'Price',
    key: 'prices_usd',
    description: 'The historical usd price of asset'
  }
];

const marketTotallist = [
  {
    type: 'uint32',
    key: 'block_number',
    description: 'The block number of the data point'
  },
  {
    type: 'uint32',
    key: 'block_timestamp',
    description: 'The timestamp of the block of the data point'
  },
  {
    type: 'Precise',
    key: 'total',
    description: 'The total value of the asset in asset-WEI terms.'
  }
];

const pricelist = [
  {
    type: 'uint32',
    key: 'block_number',
    description: 'The block number of the data point'
  },
  {
    type: 'uint32',
    key: 'block_timestamp',
    description: 'The timestamp of the block of the data point'
  },
  {
    type: 'Precise',
    key: 'price',
    description: 'The price of the underlying token in usd at that block number'
  }
];

const ratelist = [
  {
    type: 'uint32',
    key: 'block_number',
    description: 'The block number of the data point'
  },
  {
    type: 'uint32',
    key: 'block_timestamp',
    description: 'The timestamp of the block of the data point'
  },
  {
    type: 'double',
    key: 'rate',
    description: 'The rate as a value between 0 and 1'
  }
];



function AccountService() {
  const headFormula = `// Returns 10 buckets of market data
  fetch("https://api.venus.io/api/market_history/graph?asset=0xf5dce57282a584d2746faf1593d3121fcac444dc&min_block_timestamp=1556747900&max_block_timestamp=1559339900&num_buckets=10");`;

  const requestFormula = `{
    "asset": "0xf5dce57282a584d2746faf1593d3121fcac444dc",
    "min_block_timestamp": 1556747900,
    "max_block_timestamp": 1559339900,
    "num_buckets": 10
   }`;

  return (
    <MarketHistoryServiceWrapper id="api-markethistoryservice">
      <Label title marginBottom>
        MarketHistoryService
      </Label>
      <Description>
        The market history service retrieves historical information about a
        market. You can use this API to find out the values of interest rates at
        a certain point in time. Its especially useful for making charts and
        graphs of the time-series values.
      </Description>
      <HighLighter>{headFormula}</HighLighter>
      <div className="api-section">
        <div className="name">GET:</div>
        <div className="desc">/graph</div>
      </div>
      <SubSection>
        <Label marginBottom>MarketHistoryGraphRequest</Label>
        <Description>
          The market history graph API returns information about a market
          between two timestamps. The requestor can choose the asset and number
          of buckets to return within the range. For example:
        </Description>
        <HighLighter>{requestFormula}</HighLighter>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {requestList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>MarketHistoryGraphResponse</Label>
        <Description>
          The market history graph API response contains the rates for both
          suppliers and borrowers, as well as the sequence of total supply and
          borrows for the given market.
        </Description>
        <div className="table-section">
          <div className="list-section">
            <div className="type header response">Type</div>
            <div className="key header response">Key</div>
            <div className="desc header response">Description</div>
          </div>
          {responseList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type response">{item.type}</div>
              <div className="key response">{item.key}</div>
              <div className="desc response">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>MarketTotal</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {marketTotallist.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>Price</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {pricelist.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>Rate</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {ratelist.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </MarketHistoryServiceWrapper>
  );
}

export default AccountService;
