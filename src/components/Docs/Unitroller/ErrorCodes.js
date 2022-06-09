import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';

const ErrorCodesWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ErrorCodesTable = styled.div`
  overflow: auto;

  @media (max-width: 1200px) {
    padding: 10px;
  }

  .code {
    width: 100px;
  }
  .name {
    flex: 1;
  }
  .description {
    flex: 1;
  }

  .table-header {
    padding: 16px 32px;
    @media (max-width: 1200px) {
      padding: 10px;
    }
    > div {
      font-size: 16px;
      font-weight: 900;
      color: #000000;
    }
  }

  .table-content {
    min-width: 678px;

    @media (max-width: 1200px) {
      margin-top: 20px;
    }

    .table-item {
      padding: 16px 32px;
      border-top: 1px solid #fae0b1;

      > div {
        font-size: 16px;
        font-weight: 900;
        color: #000000;
      }
      @media (max-width: 1200px) {
        padding: 10px;
      }
    }
  }
`;

const errorCodeData = [
  { code: '0', name: 'NO_ERROR', description: 'Not a failure.' },
  {
    code: '1',
    name: 'UNAUTHORIZED',
    description: 'The sender is not authorized to perform this action.'
  },
  {
    code: '2',
    name: 'XVSTROLLER_MISMATCH',
    description:
      'Liquidation cannot be performed in markets with different unitrollers.'
  },
  {
    code: '3',
    name: 'INSUFFICIENT_SHORTFALL',
    description:
      'The account does not have sufficient shortfall to perform this action.'
  },
  {
    code: '4',
    name: 'INSUFFICIENT_LIQUIDITY',
    description:
      'The account does not have sufficient liquidity to perform this action.'
  },
  {
    code: '5',
    name: 'INVALID_CLOSE_FACTOR',
    description: 'The close factor is not valid.'
  },
  {
    code: '6',
    name: 'INVALID_COLLATERAL_FACTOR',
    description: 'The collateral factor is not valid.'
  },
  {
    code: '7',
    name: 'INVALID_LIQUIDATION_INCENTIVE',
    description: 'The liquidation incentive is invalid.'
  },
  {
    code: '8',
    name: 'MARKET_NOT_ENTERED',
    description: 'The market has not been entered by the account.'
  },
  {
    code: '9',
    name: 'MARKET_NOT_LISTED',
    description: 'The market is not currently listed by the unitroller.'
  },
  {
    code: '10',
    name: 'MARKET_ALREADY_LISTED',
    description: 'An admin tried to list the same market more than once.'
  },
  {
    code: '11',
    name: 'MATH_ERROR',
    description: 'A math calculation error occurred.'
  },
  {
    code: '12',
    name: 'NONZERO_BORROW_BALANCE',
    description:
      'The action cannot be performed since the account carries a borrow balance.'
  },
  {
    code: '13',
    name: 'PRICE_ERROR',
    description: 'The unitroller could not obtain a required price of an asset.'
  },
  {
    code: '14',
    name: 'REJECTION',
    description: 'The unitroller rejects the action requested by the market.'
  },
  {
    code: '15',
    name: 'SNAPSHOT_ERROR',
    description:
      'The unitroller could not get the account borrows and exchange rate from the market.'
  },
  {
    code: '16',
    name: 'TOO_MANY_ASSETS',
    description: 'Attempted to enter more markets than are currently supported.'
  },
  {
    code: '17',
    name: 'TOO_MUCH_REPAY',
    description: 'Attempted to repay more than is allowed by the protocol.'
  }
];

const failureInfo = [
  { code: '0', name: 'ACCEPT_ADMIN_PENDING_ADMIN_CHECK' },
  { code: '1', name: 'ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK' },
  { code: '2', name: 'EXIT_MARKET_BALANCE_OWED' },
  { code: '3', name: 'EXIT_MARKET_REJECTION' },
  { code: '4', name: 'SET_CLOSE_FACTOR_OWNER_CHECK' },
  { code: '5', name: 'SET_CLOSE_FACTOR_VALIDATION' },
  { code: '6', name: 'SET_COLLATERAL_FACTOR_OWNER_CHECK' },
  { code: '7', name: 'SET_COLLATERAL_FACTOR_NO_EXISTS' },
  { code: '8', name: 'SET_COLLATERAL_FACTOR_VALIDATION' },
  { code: '9', name: 'SET_COLLATERAL_FACTOR_WITHOUT_PRICE' },
  { code: '10', name: 'SET_IMPLEMENTATION_OWNER_CHECK' },
  { code: '11', name: 'SET_LIQUIDATION_INCENTIVE_OWNER_CHECK' },
  { code: '12', name: 'SET_LIQUIDATION_INCENTIVE_VALIDATION' },
  { code: '13', name: 'SET_MAX_ASSETS_OWNER_CHECK' },
  { code: '14', name: 'SET_PENDING_ADMIN_OWNER_CHECK' },
  { code: '15', name: 'SET_PENDING_IMPLEMENTATION_OWNER_CHECK' },
  { code: '16', name: 'SET_PRICE_ORACLE_OWNER_CHECK' },
  { code: '17', name: 'SUPPORT_MARKET_EXISTS' },
  { code: '18', name: 'SUPPORT_MARKET_OWNER_CHECK' }
];

function ErrorCodes() {
  return (
    <ErrorCodesWrapper id="unitroller-error-codes">
      <Label title marginBottom>
        Error Codes
      </Label>
      <ErrorCodesTable className="scrollbar">
        <div className="flex table-header">
          <div className="code">Code</div>
          <div className="name">Name</div>
          <div className="description">Description</div>
        </div>
        <div className="table-content">
          {errorCodeData.map(e => (
            <div className="flex table-item" key={e.code}>
              <div className="flex align-center code">
                <p>{e.code}</p>
              </div>
              <div className="flex align-center name">
                <p>{e.name}</p>
              </div>
              <div className="flex align-center description">
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ErrorCodesTable>
      <Label title marginTop marginBottom>
        Failure Info
      </Label>
      <ErrorCodesTable className="scrollbar">
        <div className="flex table-header">
          <div className="code">Code</div>
          <div className="name">Name</div>
        </div>
        <div className="table-content">
          {failureInfo.map(e => (
            <div className="flex table-item" key={`failure-${e.code}`}>
              <div className="flex align-center code">
                <p>{e.code}</p>
              </div>
              <div className="flex align-center name">
                <p>{e.name}</p>
              </div>
            </div>
          ))}
        </div>
      </ErrorCodesTable>
    </ErrorCodesWrapper>
  );
}

export default ErrorCodes;
