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
    name: 'BAD_INPUT',
    description: 'An invalid argument was supplied by the caller.'
  },
  {
    name: 'SXPTROLLER_REJECTION',
    description: 'The action would violate the SXPtroller policy.'
  },
  {
    name: 'SXPTROLLER_CALCULATION_ERROR',
    description: 'An internal calculation has failed in the SXPtroller.'
  },
  {
    name: 'INTEREST_RATE_MODEL_ERROR',
    description: 'The interest rate model returned an invalid value.'
  },
  {
    name: 'INVALID_ACCOUNT_PAIR',
    description: 'The specified combination of accounts is invalid.'
  },
  {
    name: 'INVALID_CLOSE_AMOUNT_REQUESTED',
    description: 'The amount to liquidate is invalid.'
  },
  {
    name: 'INVALID_COLLATERAL_FACTOR',
    description: 'The collateral factor is invalid.'
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
    name: 'MARKET_NOT_LISTED',
    description: 'The market is not currently listed by its unitroller.'
  },
  {
    name: 'TOKEN_INSUFICIENT_ALLOWANCE',
    description:
      'BEP-20 contract must allow Money Market contract to call transferFrom. The current allowance is either 0 or less than the requested supply, repayBorrow or liquidate amount.'
  },
  {
    name: 'TOKEN_INSUFFICIENT_BALANCE',
    description:
      'Caller does not have sufficient balance in the BEP-20 contract to complete the desired action.'
  },
  {
    name: 'TOKEN_INSUFFICIENT_CASH',
    description:
      'The market does not have a sufficient cash balance to complete the transaction. You may attempt this transaction again later.'
  },
  {
    name: 'TOKEN_TRANSFER_IN_FAILED',
    description: 'Failure in BEP-20 when transfering token into the market.'
  },
  {
    name: 'TOKEN_TRANSFER_OUT_FAILED',
    description: 'Failure in BEP-20 when transfering token out of the market.'
  }
];

const failureInfoList = [
  'ACCEPT_ADMIN_PENDING_ADMIN_CHECK',
  'ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED',
  'ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED',
  'ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED',
  'ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED',
  'ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED',
  'ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED',
  'BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED',
  'BORROW_ACCRUE_INTEREST_FAILED',
  'BORROW_CASH_NOT_AVAILABLE',
  'BORROW_FRESHNESS_CHECK',
  'BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED',
  'BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED',
  'BORROW_MARKET_NOT_LISTED',
  'BORROW_UNITROLLER_REJECTION',
  'LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED',
  'LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED',
  'LIQUIDATE_COLLATERAL_FRESHNESS_CHECK',
  'LIQUIDATE_UNITROLLER_REJECTION',
  'LIQUIDATE_UNITROLLER_CALCULATE_AMOUNT_SEIZE_FAILED',
  'LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX',
  'LIQUIDATE_CLOSE_AMOUNT_IS_ZERO',
  'LIQUIDATE_FRESHNESS_CHECK',
  'LIQUIDATE_LIQUIDATOR_IS_BORROWER',
  'LIQUIDATE_REPAY_BORROW_FRESH_FAILED',
  'LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED',
  'LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED',
  'LIQUIDATE_SEIZE_UNITROLLER_REJECTION',
  'LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER',
  'LIQUIDATE_SEIZE_TOO_MUCH',
  'MINT_ACCRUE_INTEREST_FAILED',
  'MINT_UNITROLLER_REJECTION',
  'MINT_EXCHANGE_CALCULATION_FAILED',
  'MINT_EXCHANGE_RATE_READ_FAILED',
  'MINT_FRESHNESS_CHECK',
  'MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED',
  'MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED',
  'MINT_TRANSFER_IN_FAILED',
  'MINT_TRANSFER_IN_NOT_POSSIBLE',
  'REDEEM_ACCRUE_INTEREST_FAILED',
  'REDEEM_UNITROLLER_REJECTION',
  'REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED',
  'REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED',
  'REDEEM_EXCHANGE_RATE_READ_FAILED',
  'REDEEM_FRESHNESS_CHECK',
  'REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED',
  'REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED',
  'REDEEM_TRANSFER_OUT_NOT_POSSIBLE',
  'REDUCE_RESERVES_ACCRUE_INTEREST_FAILED',
  'REDUCE_RESERVES_ADMIN_CHECK',
  'REDUCE_RESERVES_CASH_NOT_AVAILABLE',
  'REDUCE_RESERVES_FRESH_CHECK',
  'REDUCE_RESERVES_VALIDATION',
  'REPAY_BEHALF_ACCRUE_INTEREST_FAILED',
  'REPAY_BORROW_ACCRUE_INTEREST_FAILED',
  'REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED',
  'REPAY_BORROW_UNITROLLER_REJECTION',
  'REPAY_BORROW_FRESHNESS_CHECK',
  'REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED',
  'REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED',
  'REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE',
  'SET_COLLATERAL_FACTOR_OWNER_CHECK',
  'SET_COLLATERAL_FACTOR_VALIDATION',
  'SET_UNITROLLER_OWNER_CHECK',
  'SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED',
  'SET_INTEREST_RATE_MODEL_FRESH_CHECK',
  'SET_INTEREST_RATE_MODEL_OWNER_CHECK',
  'SET_MAX_ASSETS_OWNER_CHECK',
  'SET_ORACLE_MARKET_NOT_LISTED',
  'SET_PENDING_ADMIN_OWNER_CHECK',
  'SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED',
  'SET_RESERVE_FACTOR_ADMIN_CHECK',
  'SET_RESERVE_FACTOR_FRESH_CHECK',
  'SET_RESERVE_FACTOR_BOUNDS_CHECK',
  'TRANSFER_UNITROLLER_REJECTION',
  'TRANSFER_NOT_ALLOWED',
  'TRANSFER_NOT_ENOUGH',
  'TRANSFER_TOO_MUCH'
];

function ErrorCodes() {
  return (
    <ErrorCodesWrapper id="vtokens-error-codes">
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
