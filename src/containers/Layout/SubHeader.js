import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { Icon } from 'antd';

const SubHeaderWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--color-bg-header);
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

  a {
    font-size: 20px;
    font-weight: 500;
    color: var(--color-white);

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    &:not(:last-child) {
      margin-right: 72px;

      @media (max-width: 1420px) {
        margin-right: 20px;
      }
    }
  }
`;

const MobileSubHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 10;

  .current-sub-path {
    display: none;
    color: var(--color-white);
    font-size: 20px;
    padding: 0 20px;

    @media (max-width: 768px) {
      display: flex;
      height: 100%;
    }
  }

  a {
    font-size: 20px;
    font-weight: 500;
    color: var(--color-white);
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

const subRouters = [
  { label: 'GETTING STARTED', path: '/docs/getstarted' },
  { label: 'VTOKENS', path: '/docs/vtokens' },
  { label: 'UNITROLLER', path: '/docs/unitroller' },
  { label: 'GOVERNANCE', path: '/docs/governance' },
  // { label: 'OPEN PRICE FEED', path: '/docs/prices' },
  { label: 'API', path: '/docs/api' },
  { label: 'VENUS.JS', path: '/docs/venus-js' },
  { label: 'SECURITY', path: '/docs/security' }
];

function SubHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let subPathName = '';

  if (
    window.location &&
    subRouters.filter(r => r.path === window.location.pathname).length !== 0
  ) {
    subPathName = subRouters.filter(r => r.path === window.location.pathname)[0].label;
  }

  return (
    <SubHeaderWrapper>
      <DesktopSubHeader className="align-center">
        {subRouters.map(r => (
          <NavLink to={r.path} activeClassName="menu-item-active" key={r.label}>
            {r.label}
          </NavLink>
        ))}
      </DesktopSubHeader>
      <MobileSubHeader className="flex flex-column just-center">
        <div
          className="flex align-center just-between current-sub-path pointer"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span>{subPathName}</span>
          <Icon type={isOpenMenu ? 'caret-up' : 'caret-down'} theme="filled" />
        </div>
        <Collapse isOpened={isOpenMenu}>
          {subRouters.map(r => (
            <NavLink
              to={r.path}
              activeClassName="menu-item-active"
              key={r.label}
            >
              {r.label}
            </NavLink>
          ))}
        </Collapse>
      </MobileSubHeader>
    </SubHeaderWrapper>
  );
}

export default SubHeader;
