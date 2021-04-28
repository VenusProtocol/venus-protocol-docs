import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const GetCostsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }
`;

const FunctionTable = styled.div`
  overflow: auto;

  @media (max-width: 1200px) {
    padding: 10px;
  }

  .func {
    flex: 1;
  }
  .gas-cost {
    flex: 3;
    padding-left: 50px;
  }
  .table-header {
    padding: 16px 32px;
    @media (max-width: 1200px) {
      padding: 10px;
    }
    > div {
      font-size: 16px;
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

const funcData = [
  { name: 'Mint', gasCost: '< 200K, cDAI < 300k' },
  { name: 'Redeem, Transfer', gasCost: '< 200K if borrowing, otherwise < 90K' },
  { name: 'Borrow ', gasCost: '< 300K' },
  { name: 'Repay Borrow ', gasCost: '< 90K' },
  { name: 'Liquidate Borrow ', gasCost: '< 400K' }
];

function GetCosts() {
  return (
    <GetCostsWrapper id="getstarted-gas-costs">
      <Label title marginBottom>
        Gas Costs
      </Label>
      <Description>
        The gas usage of the protocol functions may fluctuate by market and
        user. External calls, such as to underlying BEP-20 tokens, may use an
        arbitrary amount of gas. Any calculations that involve checking{' '}
        <a href="/docs/unitroller#get-account-liquidity" target="_blank">
          account liquidity
        </a>{' '}
        , have gas costs that increase with the number of{' '}
        <a href="/docs/unitroller#enter-markets" target="_blank">
          entered markets
        </a>
        . Thus, while it can be difficult to provide any guarantees about costs,
        we provide the table below for guidance:
      </Description>
      <FunctionTable className="scrollbar">
        <div className="flex table-header">
          <div className="func bold">Function</div>
          <div className="gas-cost bold">Typical Gas Cost</div>
        </div>
        <div className="table-content">
          {funcData.map(f => (
            <div className="flex table-item" key={f.name}>
              <div className="flex align-center func">
                <p>{f.name}</p>
              </div>
              <div className="flex align-center gas-cost">
                <p>{f.gasCost}</p>
              </div>
            </div>
          ))}
        </div>
      </FunctionTable>
    </GetCostsWrapper>
  );
}

export default GetCosts;
