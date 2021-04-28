import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import logoImg from 'assets/img/logo.png';

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--color-bg-header);
  padding: 40px 100px;

  @media (max-width: 1024px) {
    padding: 50px 20px;
  }

  .footer-content {
    img {
      width: 106px;
      height: 23px;
    }
    .link-wrapper {
      p {
        font-weight: 900;
        font-size: 20px;
        color: var(--color-white);
        margin-bottom: 50px;

        @media (max-width: 576px) {
          font-size: 18px;
          margin-bottom: 50px;
        }
      }
      a {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-dark-gray);

        &:hover {
          color: #1890ff;
        }

        &:not(:last-child) {
          margin-bottom: 25px;
        }
        @media (max-width: 576px) {
          font-size: 16px;
        }
      }
      .link-list {
        &:not(:last-child) {
          margin-right: 150px;

          @media (max-width: 1024px) {
            margin-right: 100px;
          }
          @media (max-width: 768px) {
            margin-right: 30px;
          }
          @media (max-width: 576px) {
            margin-right: 20px;
          }
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        margin-bottom: 20px;
      }
    }
  }

  .copyright {
    margin-top: 89px;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-dark-gray);
    @media (max-width: 768px) {
      margin-top: 40px;
      text-align: center;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper className="flex flex-column">
      <div className="flex just-between footer-content">
        <img src={logoImg} alt="logo" />
        <div className="flex link-wrapper">
          <div className="flex flex-column link-list protocol-wrapper">
            <p>Protocol</p>
            <a href="https://app.venus.io" target="_blank" rel="noreferrer">
              APP
            </a>
            <a
              href="https://venus.io/#markets"
              target="_blank"
              rel="noreferrer"
            >
              Market
            </a>
            <NavLink to="/docs/venus-js">Developers</NavLink>
            <a
              href="https://venus.io/Whitepaper"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </div>
          <div className="flex flex-column link-list governance-wrapper">
            <p>Governance</p>
            <a
              href="https://app.venus.io/vote"
              target="_blank"
              rel="noreferrer"
            >
              Overview
            </a>
            <a href="https://app.venus.io/xvs" target="_blank" rel="noreferrer">
              XVS
            </a>
            <a
              href="https://app.venus.io/leaderboard"
              target="_blank"
              rel="noreferrer"
            >
              Leaderboard
            </a>
            <a
              href="https://community.swipe.org"
              target="_blank"
              rel="noreferrer"
            >
              Forums
            </a>
          </div>
          <div className="flex flex-column link-list company-wrapper">
            <p>Company</p>
            <a href="https://venus.io" target="_blank" rel="noreferrer">
              About
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2020 Developed by Swipe Wallet.
        <br></br>
        Licensed & open-source under the MIT License
      </p>
    </FooterWrapper>
  );
}

export default Footer;
