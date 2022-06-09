import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import { SubSection } from 'components/Basic/Section';

const AccountServiceWrapper = styled.div`
  margin-bottom: 50px;

  .api-section {
    display: flex;
    align-items: center;

    .name {
      font-size: 16px;
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
    description:
      'List of account addresses to filter on, e.g.: ["0x...",,"0x..."]'
  },
  {
    type: 'Precise',
    key: 'min_borrow_value_in_eth',
    description:
      'Filter for accounts which total outstanding borrows exceeding given amount.'
  },
  {
    type: 'Precise',
    key: 'max_health',
    description:
      'Filter for accounts where outstanding borrows divided by collateral value is leass than the provided amount. If returned value is less than 1.0, for instance, the account is subject to liquidation. If provided, should be given as `{"value": "...string formatted number..."}'
  },
  {
    type: 'uint32',
    key: 'block_number',
    description:
      'If provided, API returns data for given block number from our historical data. Otherwise, API defaults to returning the latest information.'
  },
  {
    type: 'uint32',
    key: 'block_timestamp',
    description:
      'If provided, API returns data for given timestamp from our historical data. Otherwise, API defaults to returning the latest information.'
  },
  {
    type: 'uint32',
    key: 'page_size',
    description:
      'Number of accounts to include in the response, default is 10 e.g. page_size=10'
  },
  {
    type: 'uint32',
    key: 'page_number',
    description:
      'Pagination number for accounts in the response, default is 1 e.g. page_number=1'
  },
  {
    type: 'string',
    key: 'network',
    description: 'The bsc network to use for the request'
  }
];

const responseList = [
  {
    type: 'Error',
    key: 'error',
    description: 'If set and non-zero, indicates an error returning data.'
  },
  {
    type: 'AccountRequest',
    key: 'request',
    description: 'The request parameters are echoed in the response.'
  },
  {
    type: 'PaginationSummary',
    key: 'pagination_summary',
    description: 'For example'
  },
  {
    type: 'Account',
    key: 'accounts',
    description:
      'The list of accounts (see Account below) matching the requested filter, with the associated account and vToken data.'
  }
];

const accountList = [
  {
    type: 'bytes',
    key: 'address',
    description: 'The public BSC address of the account'
  },
  {
    type: 'Precise',
    key: 'total_collateral_value_in_eth',
    description:
      'The value of all collateral supplied by the account. Calculated as vTokens held • exchange rate • collateral factor. Note: assets can be supplied and gain interest without being counted as collateral.'
  },
  {
    type: 'Precise',
    key: 'total_borrow_value_in_eth',
    description:
      'The value of all outstanding borrows with accumulated interest.'
  },
  {
    type: 'Precise',
    key: 'health',
    description:
      'If this value is less than 1.0, the account is subject to liquidation.'
  },
  {
    type: 'int32',
    key: 'block_updated',
    description: ''
  },
  {
    type: 'AccountVToken',
    key: 'tokens',
    description:
      'A list of tokens held by this account, see AccountVToken below for details.'
  }
];

const accountVtokenList = [
  {
    type: 'bytes',
    key: 'address',
    description: 'The address of the vToken'
  },
  {
    type: 'string',
    key: 'symbol',
    description: 'The symbol of the vToken'
  },
  {
    type: 'Precise',
    key: 'supply_balance_underlying',
    description: 'The vToken balance converted to underlying tokens'
  },
  {
    type: 'Precise',
    key: 'borrow_balance_underlying',
    description:
      'The borrow balance (this is denominated in the underlying token, not in vTokens)'
  },
  {
    type: 'Precise',
    key: 'lifetime_supply_interest_accrued',
    description:
      'The amount of supply interest accrued for the lifetime of this account-vToken pair.'
  },
  {
    type: 'Precise',
    key: 'lifetime_borrow_interest_accrued',
    description:
      'The amount of borrow interest accrued for the lifetime of this account-vToken pair.'
  },
  {
    type: 'Precise',
    key: 'safe_withdraw_amount_underlying',
    description: `The amount of supply that can be withdrawn such that the user's health remains at 1.25 or higher.`
  }
];

function AccountService() {
  const headFormula = `// Retreives list of accounts and related supply and borrow balances.\nfetch("https://api.venus.io/api/account");\n\n// Returns details for given account\nfetch("https://api.venus.io/api/account?addresses[]=0x00..");`;
  const requestFormula = `{\n  "addresses": [] // returns all accounts if empty or not included\n  "block_number": 0 // returns latest if given 0\n  "max_health": { "value": "10.0" }\n  "min_borrow_value_in_eth": { "value": "0.002" }\n  "page_number": 1 \n  "page_size": 10\n}`;
  const accountFormula = `{
    "address": "0xbac065be2e8ca097e9ac924e94af000dd3a5663"
    "health": { "value": "1.07264275673050348990755599431194797431802239523113293682619605751591901" }
    "tokens": [
      {
        "address": "0xf5dce57282a584d2746faf1593d3121fcac444dc"
        "borrow_balance_underlying": {"value": "131.4682716123015"}
        "lifetime_borrow_interest_accrued": {"value": "0.44430505829286"}
        "lifetime_supply_interest_accrued": {"value": "0.0000021671829864899976"}
        "supply_balance_underlying": {"value": "0.0"}
      }
    ],
    "total_borrow_value_in_eth": {"value": "0.5100157047140227313856015174794473200000000000000000000000000000" }
    "total_collateral_value_in_eth": {"value": "0.54706465148029978664135447293587201124121731200000000000000000000000000" }
  }`;
  const AccountVTokenFormula = `{
    "address": "0xf5dce57282a584d2746faf1593d3121fcac444dc"
    "borrow_balance_underlying": {"value": "131.4682716123015"}
    "lifetime_borrow_interest_accrued": {"value": "0.44430505829286"}
    "lifetime_supply_interest_accrued": {"value": "0.0000021671829864899976"}
    "supply_balance_underlying": {"value": "0.0"}
  }`;

  return (
    <AccountServiceWrapper id="api-accountservice">
      <Label title marginBottom>
        AccountService
      </Label>
      <Description>
        The Account API retrieves information for various accounts which have
        interacted with XVS. You can use this API to pull data about a specific
        account by address, or alternatively, pull data for a list of unhealthy
        accounts (that is, accounts which are approaching
        under-collateralization).
      </Description>
      <HighLighter>{headFormula}</HighLighter>
      <div className="api-section">
        <div className="name">GET:</div>
        <div className="desc">/account</div>
      </div>
      <SubSection>
        <Label marginBottom>AccountRequest</Label>
        <Description>
          The request to the account API can specify a number filters, such as
          which addresses to retrieve information about or general health
          requirements. The following shows an example set of request parameters
          in JSON:
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
        <Label marginBottom>AccountReponse</Label>
        <Description>
          The account API returns an overall picture of accounts matching the
          filters on Venus.
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
        <Label marginBottom>Account</Label>
        <Description>
          This includes a list of vTokens contextualized to each account.
        </Description>
        <HighLighter>{accountFormula}</HighLighter>
        <div className="table-section">
          <div className="list-section">
            <div className="type header response">Type</div>
            <div className="key header response">Key</div>
            <div className="desc header response">Description</div>
          </div>
          {accountList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type response">{item.type}</div>
              <div className="key response">{item.key}</div>
              <div className="desc response">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>AccountVToken</Label>
        <Description>
          An account's supply, borrow, and interest information for a particular
          vToken.
        </Description>
        <HighLighter>{AccountVTokenFormula}</HighLighter>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {accountVtokenList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </AccountServiceWrapper>
  );
}

export default AccountService;
