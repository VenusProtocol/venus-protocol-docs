import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';

const ErrorCodesWrapper = styled.div`
  margin-bottom: 50px;
  overflow: auto;

  .list-section {
    display: flex;
    align-items: center;
    padding: 16px 35px;
    border-bottom: 1px solid var(--color-light-yellow);

    @media (max-width: 768px) {
      padding: 10px;
    }

    .code {
      flex: 1;
      min-width: 50px;
      font-size: 16px;
      font-weight: 900;
      color: #000000;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .name {
      flex: 4;
      min-width: 170px;
      font-size: 16px;
      font-weight: normal;
      padding-right: 20px;
      word-break: break-all;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      &.header {
        color: #000000;
        font-weight: 900;
      }
    }

    .description {
      flex: 5;
      min-width: 100px;
      font-size: 16px;
      font-weight: 900;
      color: #000000;

      @media (max-width: 768px) {
        font-size: 16px;
      }

      span {
        color: #ffb900;
        cursor: pointer;
      }
    }
  }
`;

const errorCodeList = [
  {
    name: 'NO_ERROR',
    description: 'Not a failure.'
  },
  {
    name: 'UNAUTHORIZED',
    description: 'The sender is not authorized to perform this action.'
  },
  {
    name: 'REJECTION',
    description:
      'The action would violate the comptroller, vaicontroller policy.'
  },
  {
    name: 'SNAPSHOT_ERROR',
    description:
      'The comptroller could not get the account borrows and exchange rate from the market.'
  },
  {
    name: 'PRICE_ERROR',
    description:
      'The comptroller could not obtain a required price of an asset.'
  },
  {
    name: 'MATH_ERROR',
    description: 'A math calculation error occurred.'
  },
  {
    name: 'MARKET_NOT_FRESH',
    description: 'Interest has not been properly accrued.'
  },
  {
    name: 'INSUFFICIENT_BALANCE_FOR_VAI',
    description: 'Caller does not have sufficient balance to mint VAI.'
  }
];

const failureInfoList = [
  'SET_PENDING_ADMIN_OWNER_CHECK',
  'SET_PENDING_IMPLEMENTATION_OWNER_CHECK',
  'SET_COMPTROLLER_OWNER_CHECK',
  'ACCEPT_ADMIN_PENDING_ADMIN_CHECK',
  'ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK',
  'VAI_MINT_REJECTION',
  'VAI_BURN_REJECTION',
  'VAI_LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED',
  'VAI_LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED',
  'VAI_LIQUIDATE_COLLATERAL_FRESHNESS_CHECK',
  'VAI_LIQUIDATE_COMPTROLLER_REJECTION',
  'VAI_LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED',
  'VAI_LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX',
  'VAI_LIQUIDATE_CLOSE_AMOUNT_IS_ZERO',
  'VAI_LIQUIDATE_FRESHNESS_CHECK',
  'VAI_LIQUIDATE_LIQUIDATOR_IS_BORROWER',
  'VAI_LIQUIDATE_REPAY_BORROW_FRESH_FAILED',
  'VAI_LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED',
  'VAI_LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED',
  'VAI_LIQUIDATE_SEIZE_COMPTROLLER_REJECTION',
  'VAI_LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER',
  'VAI_LIQUIDATE_SEIZE_TOO_MUCH',
  'MINT_FEE_CALCULATION_FAILED',
  'SET_TREASURY_OWNER_CHECK'
];

function ErrorCodes() {
  return (
    <ErrorCodesWrapper id="vaicontroller-error-codes">
      <Label title marginBottom>
        Error Codes
      </Label>
      <div className="list-section">
        <div className="code">Code</div>
        <div className="name header">Name</div>
        <div className="description">Description</div>
      </div>
      {errorCodeList.map((item, index) => (
        <div className="list-section" key={index}>
          <div className="code">{index}</div>
          <div className="name">{item.name}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
      <Label title marginBottom marginTop>
        Failure Info
      </Label>
      <div className="list-section">
        <div className="code">Code</div>
        <div className="name header">Name</div>
      </div>
      {failureInfoList.map((item, index) => (
        <div className="list-section" key={index}>
          <div className="code">{index}</div>
          <div className="name">{item}</div>
        </div>
      ))}
    </ErrorCodesWrapper>
  );
}

export default ErrorCodes;
