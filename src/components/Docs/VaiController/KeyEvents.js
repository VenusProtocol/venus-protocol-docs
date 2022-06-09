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
    <KeyEventsWrapper id="vaicontroller-key-events">
      <Label title marginBottom>
        Key Events
      </Label>
      <div className="list-section">
        <div className="name header">Event</div>
        <div className="description">Description</div>
      </div>
      <div className="list-section">
        <div className="name">MintVAI(address minter, uint mintVAIAmount)</div>
        <div className="description">
          Emitted upon a successful{' '}
          <a href="#vaicontroller-mint-vai">MintVAI</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          RepayVAI(address payer, address borrower, uint repayAmount)
        </div>
        <div className="description">
          Emitted upon a successful{' '}
          <a href="#vaicontroller-repay-vai">RepayVAI</a>.
        </div>
      </div>
      <div className="list-section">
        <div className="name">
          LiquidateVAI(address liquidator, address borrower, uint repayAmount,
          address vTokenCollateral, uint seizeTokens)
        </div>
        <div className="description">
          Emitted upon a successful{' '}
          <a href="#vaicontroller-liquidate-vai">LiquidateVAI</a>.
        </div>
      </div>
    </KeyEventsWrapper>
  );
}

export default KeyEvents;
