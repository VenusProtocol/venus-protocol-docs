import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/GetStarted/Introduction';
import Guides from 'components/Docs/GetStarted/Guides';
import Networks from 'components/Docs/GetStarted/Networks';
import ProtocolMath from 'components/Docs/GetStarted/ProtocolMath';
import Decimals from 'components/Docs/GetStarted/Decimals';
import ExchangeRate from 'components/Docs/GetStarted/ExchangeRate';
import CalculateInterest from 'components/Docs/GetStarted/CalculateInterest';
import CalculateAPY from 'components/Docs/GetStarted/CalculateAPY';
import GetCosts from 'components/Docs/GetStarted/GetCosts';

const GetStartedWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function GetStarted() {
  return (
    <MainLayout>
      <GetStartedWrapper>
        <Label marginBottom>Getting Started</Label>
        <Introduction />
        <Guides />
        <Networks />
        <ProtocolMath />
        <Decimals />
        <ExchangeRate />
        <CalculateInterest />
        <CalculateAPY />
        <GetCosts />
      </GetStartedWrapper>
    </MainLayout>
  );
}

export default GetStarted;
