import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Collapse } from 'react-collapse';
import { Icon } from 'antd';
import logoImg from 'assets/img/logo.png';

const MainHeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--color-bg-header);

  @media (max-width: 768px) {
    height: 60px;
  }

  .app-btn {
    width: 114px;
    height: 30px;
    border-radius: 5px;
    background-image: linear-gradient(to right, #f2c265, #f7b44f);
    .MuiButton-label {
      font-size: 14px;
      color: var(--color-white);
    }
  }
`;

const DesktopSubHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 100px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  .menu-item-wrapper {
    a {
      font-size: 21px;
      font-weight: 600;
      color: var(--color-white);
      margin-right: 72px;

      &:hover {
        color: #1890ff;
      }

      @media (max-width: 1420px) {
        margin-right: 20px;
      }
      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;

const MobileSubHeader = styled.div`
  position: relative;
  width: 100%;
  z-index: 100;

  .mobile-menu {
    display: none;
    color: var(--color-white);
    font-size: 20px;
    padding: 0 20px;

    @media (max-width: 768px) {
      height: 100%;
      display: flex;
    }
  }

  a {
    font-size: 21px;
    font-weight: 600;
    color: var(--color-white);
    margin-bottom: 20px;
  }

  .ReactCollapse--collapse {
    position: absolute;
    width: 100vw;
    left: 0;
    top: 80px;

    @media (max-width: 768px) {
      top: 40px;
    }

    .ReactCollapse--content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: var(--color-bg-header);
    }
  }
`;

function MainHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MainHeaderWrapper className="flex flex-column align-center just-center">
      <DesktopSubHeader className="align-center just-between">
        <img src={logoImg} alt="logo" />
        <div className="flex align-center menu-item-wrapper">
          <a href="https://venus.io/#markets" target="_blank" rel="noreferrer">
            Markets
          </a>
          <a href="https://app.venus.io/vote" target="_blank" rel="noreferrer">
            Governance
          </a>
          <a
            href="https://venus-docs.venus.io"
            target="_blank"
            rel="noreferrer"
          >
            Developers
          </a>
          <NavLink to="/docs" activeClassName="menu-item-active">
            Docs
          </NavLink>
          <a
            href="https://app.venus.io/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="app-btn">App</Button>
          </a>
        </div>
      </DesktopSubHeader>
      <MobileSubHeader className="flex flex-column just-center">
        <div className="flex align-center just-between mobile-menu pointer">
          <img src={logoImg} alt="logo" />
          {isOpenMenu ? (
            <Icon type="close-square" onClick={() => setIsOpenMenu(false)} />
          ) : (
            <Icon type="unordered-list" onClick={() => setIsOpenMenu(true)} />
          )}
        </div>
        <Collapse isOpened={isOpenMenu}>
          <a href="https://venus.io/#markets" target="_blank" rel="noreferrer">
            Markets
          </a>
          <a href="https://app.venus.io/vote" target="_blank" rel="noreferrer">
            Governance
          </a>
          <a
            href="https://venus-docs.venus.io"
            target="_blank"
            rel="noreferrer"
          >
            Developers
          </a>
          <NavLink to="/docs" activeClassName="menu-item-active">
            Docs
          </NavLink>
          <a
            href="https://app.venus.io/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="app-btn">App</Button>
          </a>
        </Collapse>
      </MobileSubHeader>
    </MainHeaderWrapper>
  );
}

export default MainHeader;
