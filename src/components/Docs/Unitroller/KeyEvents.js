import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';

const KeyEventsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const KeyEventsTable = styled.div`
  overflow: auto;
  .table-header {
    padding: 16px 32px;
    @media (max-width: 1200px) {
      padding: 10px;
    }
    > div {
      flex: 1;
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
        flex: 1;
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

function KeyEvents() {
  return (
    <KeyEventsWrapper id="unitroller-key-events">
      <Label title marginBottom>
        Key Events
      </Label>
      <KeyEventsTable className="scrollbar">
        <div className="flex table-header">
          <div className="event">Event</div>
          <div className="description">Description</div>
        </div>
        <div className="table-content">
          <div className="flex table-item">
            <div className="flex align-center event">
              <p>MarketEntered(vToken vToken, address account)</p>
            </div>
            <div className="flex align-center description">
              <p>
                Emitted upon a successful{' '}
                <a href="#unitroller-enter-markets">Enter Market</a>.
              </p>
            </div>
          </div>
          <div className="flex table-item">
            <div className="flex align-center event">
              <p>MarketExited(vToken vToken, address account)</p>
            </div>
            <div className="flex align-center description">
              <p>
                Emitted upon a successful{' '}
                <a href="#unitroller-exit-market">Exit Market</a>.
              </p>
            </div>
          </div>
        </div>
      </KeyEventsTable>
    </KeyEventsWrapper>
  );
}

export default KeyEvents;
