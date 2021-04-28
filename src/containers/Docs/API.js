import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/API/Introduction';
import AccountService from 'components/Docs/API/AccountService';
import VTokenService from 'components/Docs/API/VTokenService';
import MarketHistoryService from 'components/Docs/API/MarketHistoryService';
import GovernanceService from 'components/Docs/API/GovernanceService';
import SharedDataTypes from 'components/Docs/API/SharedDataTypes';

const APIWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function API() {
  return (
    <MainLayout tabType="api">
      <APIWrapper>
        <Label marginBottom>Venus API</Label>
        <Introduction />
        {/* <AccountService /> */}
        <VTokenService />
        <MarketHistoryService />
        <GovernanceService />
        <SharedDataTypes />
      </APIWrapper>
    </MainLayout>
  );
}

export default API;
