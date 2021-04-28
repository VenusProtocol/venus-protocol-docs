import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainHeader from 'containers/Layout/MainHeader';
import SubHeader from 'containers/Layout/SubHeader';
import Sidebar from 'containers/Layout/Sidebar';
import Footer from 'containers/Layout/Footer';

const MainLayoutWrapper = styled.div`
  width: 100%;

  #content-outer {
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-primary);

    .main-wrapper {
      display: flex;
      background-color: var(--color-bg-main);

      #content-inner {
        width: calc(100% - 416px);

        @media (max-width: 1024px) {
          width: calc(100% - 250px);
        }
        @media (max-width: 768px) {
          width: 100vw;
        }
      }
    }
  }
`;

function MainLayout({ tabType, children }) {
  return (
    <MainLayoutWrapper className="scrollbar">
      <div id="content-outer">
        <MainHeader />
        <SubHeader />
        <div className="main-wrapper">
          <Sidebar tabType={tabType} />
          <div id="content-inner">{children}</div>
        </div>
        <Footer />
      </div>
    </MainLayoutWrapper>
  );
}

MainLayout.propTypes = {
  tabType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

MainLayout.defaultProps = {
  children: null,
  tabType: 'getstarted'
};

export default MainLayout;
