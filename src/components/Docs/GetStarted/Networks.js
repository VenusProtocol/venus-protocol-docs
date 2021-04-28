import React, { useState } from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import copyImg from 'assets/img/Docs/GetStarted/copy.png';
import linkImg from 'assets/img/Docs/GetStarted/link.png';
import bnbImg from 'assets/img/Coins/bnb.png';
import usdtImg from 'assets/img/Coins/usdt.png';

const NetworksWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 49px;
  }

  .tabs {
    padding: 17px 34px;
    margin-top: 22px;

    @media (max-width: 1200px) {
      padding: 10px;
    }

    .tab-item {
      flex: 1;
      font-size: 20px;
      font-weight: 900;
      color: #000000;

      @media (max-width: 1200px) {
        font-size: 16px;
      }
    }
    .tab-active {
      color: #f7b44f;
    }
  }

  .full-list {
    font-size: 16px;
    font-weight: 900;
    line-height: normal;
    color: #6e6e6e;
    margin-top: 42px;
    span {
      color: #ffb900;
    }
  }
`;

const NetworksTable = styled.div`
  overflow: auto;
  padding: 40px 34px;
  border-radius: 20px;
  background-color: #f9f9f9;

  @media (max-width: 1200px) {
    padding: 10px;
  }

  .contract {
    flex: 2;
  }
  .abi {
    flex: 1;
  }
  .address {
    flex: 2;
  }
  .action {
    flex: 1;
  }

  .table-header {
    > div {
      font-size: 20px;
      font-weight: 900;
      color: #000000;
    }
  }

  .table-content {
    margin-top: 66px;
    min-width: 678px;

    @media (max-width: 1200px) {
      margin-top: 20px;
    }

    .table-item {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      @media (max-width: 1200px) {
        margin-bottom: 20px;
      }
      .contract {
        img {
          width: 36px;
          height: 36px;
        }
        .symbol {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin: 0 35px;
        }
        .type {
          padding: 7px 25px;
          border-radius: 17px;
          background-color: #252a4a;
          font-size: 16px;
          line-height: normal;
          font-weight: 600;
          color: #ffffff;
        }
        @media (max-width: 1500px) {
          flex-direction: column;
          align-items: flex-start;

          .symbol {
            margin: 10px 0px;
          }
        }
      }
      .abi {
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: normal;
          color: #0bce62;
        }
      }
      .address {
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: normal;
          color: #000000;
        }
      }
      .action {
        img {
          cursor: pointer;
        }
        img {
          &:not(:last-child) {
            margin-right: 25px;
          }
        }
      }
    }
  }
`;

const tabs = [
  { id: 'mainnet', label: 'Mainnet' },
  { id: 'testnet', label: 'Testnet' }
];

const networksData = {
  mainnet: [
    {
      iconSrc: bnbImg,
      symbol: 'vBNB',
      type: 'vToken',
      address: '0x34v2h2d6d520s6f29d5zd2'
    },
    {
      iconSrc: usdtImg,
      symbol: 'vUSDT',
      type: 'vToken',
      address: '0x34v2h2d6d520s6f29d5zd2'
    }
  ],
  testnet: [
    {
      iconSrc: bnbImg,
      symbol: 'vBNB',
      type: 'vToken',
      address: '0x34v2h2d6d520s6f29d5zd2'
    },
    {
      iconSrc: usdtImg,
      symbol: 'vUSDT',
      type: 'vToken',
      address: '0x34v2h2d6d520s6f29d5zd2'
    }
  ]
};

function Networks() {
  const [tabType, setTabType] = useState('mainnet');

  const handleAddLink = (linkType, symbol, v) => {
    window.open(
      `https://etherscan.io/${linkType === 'address' ? 'address' : 'tx'}/${v}`,
      '_blank'
    );
  };

  return (
    <NetworksWrapper id="getstarted-networks">
      <Label title marginBottom>
        Networks
      </Label>
      <Description>
        The Venus Protocol is currently deployed on the following networks:
      </Description>
      <div className="flex align-center tabs">
        {tabs.map(t => (
          <div
            className={`pointer tab-item ${
              tabType === t.id ? 'tab-active' : ''
            }`}
            key={t.id}
            onClick={() => setTabType(t.id)}
          >
            {t.label}
          </div>
        ))}
      </div>
      <NetworksTable className="scrollbar">
        <div className="flex table-header">
          <div className="contract">Contract</div>
          <div className="abi center">ABI</div>
          <div className="address center">Address</div>
          <div className="action" />
        </div>
        <div className="table-content">
          {networksData[tabType].map(n => (
            <div className="flex table-item" key={n.symbol}>
              <div className="flex align-center contract">
                <img src={n.iconSrc} alt="symbol" />
                <p className="symbol">{n.symbol}</p>
                <div className="type">{n.type}</div>
              </div>
              <div className="flex align-center just-center abi">
                <p className="abi-type">JSON</p>
              </div>
              <div className="flex align-center address">
                <p>{n.address}</p>
              </div>
              <div className="flex align-center just-end action">
                <img
                  src={linkImg}
                  alt="address link"
                  onClick={() => handleAddLink('address', n.symbol, n.address)}
                />
                <CopyToClipboard text={n.address} onCopy={() => {}}>
                  <img src={copyImg} alt="copy" />
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>
      </NetworksTable>
      <p className="full-list center">
        You can also see a full list of all deployed contract addresses{' '}
        <a href="https://github.com/swipewallet/venus-config">here.</a>
      </p>
    </NetworksWrapper>
  );
}

export default Networks;
