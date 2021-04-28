import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import { SubSection } from 'components/Basic/Section';

const VTokenServiceWrapper = styled.div`
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
    key: 'addresses',
    description: 'List of token addresses to filter on, e.g.: ["0x...", ,"0x..."]'
  },
  {
    type: 'uint32',
    key: 'block_number',
    description: 'Only one of block_number or block timestamp should be provided. If provided, API returns data for given block number from our historical data. Otherwise, API defaults to returning the latest information.'
  },
  {
    type: 'uint32',
    key: 'block_timestamp',
    description: 'Only one of block_number or block timestamp should be provided. If provided, API returns data for given block timestamp from our historical data. Otherwise, API defaults to returning the latest information.'
  },
  {
    type: 'bool',
    key: 'meta',
    description: 'Pass true to get metadata for the token addresses specified.'
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
    description: ''
  },
  {
    type: 'VTokenRequest',
    key: 'request',
    description: 'The request parameters are echoed in the response.'
  },
  {
    type: 'VToken',
    key: 'vToken',
    description: 'The list of vToken (see VToken below) matching the requested filter.'
  },
  {
    type: 'VTokenMeta',
    key: 'meta',
    description: 'Metadata for all VTokens specified'
  }
];

const vTokenList = [
  {
    type: 'bytes',
    key: 'token_address',
    description: 'The public BSC address of the vToken'
  },
  {
    type: 'Precise',
    key: 'total_supply',
    description: 'The number of vTokens in existence'
  },
  {
    type: 'Precise',
    key: 'total_borrows',
    description: 'The amount of underlying tokens borrowed from the vToken'
  },
  {
    type: 'Precise',
    key: 'reserves',
    description: 'The amount of underylying tokens held by reserves'
  },
  {
    type: 'Precise',
    key: 'cash',
    description: 'The current liquidity of the vToken'
  },
  {
    type: 'Precise',
    key: 'exchange_rate',
    description: 'The vToken / underlying exchange rate. This rate increases over time as supply interest accrues.'
  },
  {
    type: 'Precise',
    key: 'supply_rate',
    description: 'The floating supply interest rate'
  },
  {
    type: 'Precise',
    key: 'borrow_rate',
    description: 'The floating borrow interest rate'
  },
  {
    type: 'Precise',
    key: 'collateral_factor',
    description: 'The amount of the value of the underlying token that will count as collateral. eg. cEth with collataral factor 0.75 means 1 eth of supply allows 0.75 eth of borrowing.'
  },
  {
    type: 'uint32',
    key: 'number_of_suppliers',
    description: 'The number of accounts holding this vToken'
  },
  {
    type: 'uint32',
    key: 'number_of_borrowers',
    description: 'The number of accounts with oustanding borrows'
  },
  {
    type: 'Precise',
    key: 'underlying_price',
    description: 'The price of the underlying token in eth'
  },
  {
    type: 'bytes',
    key: 'underlying_address',
    description: 'The address of the underlying token'
  },
  {
    type: 'string',
    key: 'symbol',
    description: 'The symbol of the vToken'
  },
  {
    type: 'string',
    key: 'name',
    description: 'The name of the vToken'
  },
  {
    type: 'string',
    key: 'underlying_symbol',
    description: 'The symbol of the underlying token'
  },
  {
    type: 'string',
    key: 'underlying_name',
    description: 'The name of the underlying token'
  },
  {
    type: 'bytes',
    key: 'interest_rate_model_address',
    description: 'The address of the interest rate model'
  },
  {
    type: 'Precise',
    key: 'reserve_factor',
    description: 'The amount of borrow interest that is converted into reserves'
  },
  {
    type: 'Precise',
    key: 'xvs_supply_apy',
    description: 'The floating xvs apy for supplying this token'
  },
  {
    type: 'Precise',
    key: 'xvs_borrow_apy',
    description: 'The floating xvs apy for borrowing this token'
  },
  {
    type: 'Precise',
    key: 'borrow_cap',
    description: 'The maximum size of total borrows for this market, beyond which no new borrows will be given'
  }
];

const vTokenMetaList = [
  {
    type: 'uint32',
    key: 'unique_suppliers',
    description: 'Number of non-duplicate suppliers between all specified markets'
  },
  {
    type: 'uint32',
    key: 'unique_borrowers',
    description: 'Number of non-duplicate borrowers between all specified markets'
  }
];

function VTokenService() {
  const requestFormula = `{
    "addresses": [] // returns all tokens if empty or not included
    "block_timestamp": 0 // returns latest information if given 0
  }`;
  const vTokenFormula = `{
    "status": true,
    "data": {
      "venusRate": "320000000000000000",
      "dailyVenus": "18432000000000000000000",
      "markets": [
        {
          "address": "0x95c78222b3d6e262426483d42cfa53685a67ab9d",
          "symbol": "vBUSD",
          "name": "Venus BUSD",
          "underlyingAddress": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          "underlyingName": "BUSD Token",
          "underlyingSymbol": "BUSD",
          "venusSpeeds": "51099972409735382",
          "borrowerDailyVenus": "1471679205400379001600",
          "supplierDailyVenus": "1471679205400379001600",
          "venusBorrowIndex": "1006460403459439506859256649316032716",
          "venusSupplyIndex": "577210680982813515887807572962105271986873",
          "borrowRatePerBlock": "7644292292",
          "supplyRatePerBlock": "4152465228",
          "exchangeRate": "200174085294245673758864635",
          "underlyingPrice": "1000000000000000000",
          "totalBorrows": "7583562455828296128598240",
          "totalBorrows2": "7583562.45582829612859824",
          "totalBorrowsUsd": "7583562.45582829612859824",
          "totalSupply": "62768113242896128",
          "totalSupply2": "627681132.42896128",
          "totalSupplyUsd": "12564549.654042360944171565",
          "cash": "4981859087965129989327069",
          "totalReserves": "871391201067892973287",
          "reserveFactor": "100000000000000000",
          "collateralFactor": "600000000000000000",
          "borrowApy": "8.342554767712248934",
          "supplyApy": "4.448978348831172562",
          "borrowVenusApy": "26.421476547394272322",
          "supplyVenusApy": "15.202964572901444689",
          "liquidity": "4981859.087965129989327069",
          "tokenPrice": "1",
          "borrowerCount": 288,
          "supplierCount": 280
        }
      ],
      "request": {
        "addresses": [
          "0x95c78222b3d6e262426483d42cfa53685a67ab9d"
        ]
      }
    }
  }`;
  const AccountVTokenFormula = `{
    "address": "0xf5dce57282a584d2746faf1593d3121fcac444dc"
    "borrow_balance_underlying": {"value": "131.4682716123015"}
    "lifetime_borrow_interest_accrued": {"value": "0.44430505829286"}
    "lifetime_supply_interest_accrued": {"value": "0.0000021671829864899976"}
    "supply_balance_underlying": {"value": "0.0"}
  }`;

  return (
    <VTokenServiceWrapper id="api-vtokenservice">
      <Label title marginBottom>
        VTokenService
      </Label>
      <div className="api-section">
        <div className="name">GET:</div>
        <div className="desc">/vtoken</div>
      </div>
      <SubSection>
        <Label marginBottom>VTokenRequest</Label>
        <Description>
          The request to the vToken API can specify a number filters, such as
          which tokens to retrieve information about or moment in time. The
          following shows an example set of request parameters in JSON:
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
        <Label marginBottom>VTokenResponse</Label>
        <Description>
          The vToken API returns an overall picture of vTokens matching the
          filter.
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
        <Label marginBottom>VToken</Label>
        <Description>
          This includes a list of vTokens contextualized to the full market.
        </Description>
        <HighLighter>{vTokenFormula}</HighLighter>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {vTokenList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>VTokenMeta</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {vTokenMetaList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </VTokenServiceWrapper>
  );
}

export default VTokenService;
