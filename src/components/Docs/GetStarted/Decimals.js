import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const DecimalsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const DecimalsTable = styled.div`
  overflow: auto;

  @media (max-width: 1200px) {
    padding: 10px;
  }

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

const decimalData = [
  { vtoken: 'vBNB', vtokenDecimal: 8, underlying: 'BNB', tokenDecimal: 18 },
  { vtoken: 'vBUSD', vtokenDecimal: 8, underlying: 'BUSD', tokenDecimal: 18 },
  { vtoken: 'vSXP', vtokenDecimal: 8, underlying: 'SXP', tokenDecimal: 18 },
  { vtoken: 'vUSDC', vtokenDecimal: 8, underlying: 'USDC', tokenDecimal: 18 },
  { vtoken: 'vUSDT', vtokenDecimal: 8, underlying: 'USDT', tokenDecimal: 18 },
  { vtoken: 'vXVS', vtokenDecimal: 8, underlying: 'XVS', tokenDecimal: 18 }
];

function Decimals() {
  return (
    <DecimalsWrapper>
      <Label title marginBottom>
        vToken and Underlying Decimals
      </Label>
      <Description>
        Prices and exchange rates are scaled by the decimals unique to each
        asset; vTokens are BEP-20 tokens with 8 decimals, while their underlying
        tokens vary, and have a public member named decimals.
      </Description>
      <DecimalsTable className="scrollbar">
        <div className="flex table-header">
          <div className="vtoken">vToken</div>
          <div className="vtoken-decimal center">vToken Decimals</div>
          <div className="token center">Underlying</div>
          <div className="token-decimal center">Underlying Decimals</div>
        </div>
        <div className="table-content">
          {decimalData.map(d => (
            <div className="flex table-item" key={d.vtoken}>
              <div className="flex align-center vtoken">
                <p>{d.vtoken}</p>
              </div>
              <div className="flex align-center just-center vtoken-decimal">
                <p>{d.vtokenDecimal}</p>
              </div>
              <div className="flex align-center just-center token">
                <p>{d.underlying}</p>
              </div>
              <div className="flex align-center just-center token-decimal">
                <p>{d.tokenDecimal}</p>
              </div>
            </div>
          ))}
        </div>
      </DecimalsTable>
    </DecimalsWrapper>
  );
}

export default Decimals;
