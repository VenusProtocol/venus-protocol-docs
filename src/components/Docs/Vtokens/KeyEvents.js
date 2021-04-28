import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';

const KeyEventsWrapper = styled.div`
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

    .name {
      width: 40%;
      min-width: 200px;
      font-size: 16px;
      font-weight: normal;
      padding-right: 20px;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      &.header {
        color: #000000;
        font-weight: 900;
      }
    }

    .description {
      width: 60%;
      min-width: 100px;
      font-size: 16px;
      font-weight: 900;
      color: #000000;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;

function KeyEvents() {
  return (
    <KeyEventsWrapper id="vtokens-key-events">
      <Label title marginBottom>
        Key Events
      </Label>
      <div className="list-section">
        <div className="name header">Function</div>
        <div className="description">Description</div>
      </div>
      <div className="list-section">
        <div className="name">
          Mint(address minter, uint mintAmount, uint mintTokens)
        </div>
        <div className="description">
          Emitted upon a successful <a href="#vtokens-mint">Mint</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          Redeem(address redeemer, uint redeemAmount, uint redeemTokens)
        </div>
        <div className="description">
          Emitted upon a successful <a href="#vtokens-redeem">Redeem</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)
        </div>
        <div className="description">
          Emitted upon a successful <a href="#vtokens-borrow">Borrow</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)
        </div>
        <div className="description">
          Emitted upon a successful{' '}
          <a href="#vtokens-repay-borrow">Repay Borrow</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address vTokenCollateral, uint seizeTokens)
        </div>
        <div className="description">
          Emitted upon a successful{' '}
          <a href="#vtokens-liquidate-borrow">Liquidate Borrow</a>.
        </div>
      </div>
    </KeyEventsWrapper>
  );
}

export default KeyEvents;
