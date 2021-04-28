import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/Unitroller/Introduction';
import Architecture from 'components/Docs/Unitroller/Architecture';
import EnterMarkets from 'components/Docs/Unitroller/EnterMarkets';
import ExitMarket from 'components/Docs/Unitroller/ExitMarket';
import GetAssetIn from 'components/Docs/Unitroller/GetAssetIn';
import CollateralFactor from 'components/Docs/Unitroller/CollateralFactor';
import GetAccountLiquidity from 'components/Docs/Unitroller/GetAccountLiquidity';
import CloseFactor from 'components/Docs/Unitroller/CloseFactor';
import KeyEvents from 'components/Docs/Unitroller/KeyEvents';
import ErrorCodes from 'components/Docs/Unitroller/ErrorCodes';
import LiquidationIncentive from 'components/Docs/Unitroller/LiquidationIncentive';
import MarketMetadata from 'components/Docs/Unitroller/MarketMetadata';
import ClaimCOMP from 'components/Docs/Unitroller/ClaimCOMP';
import DistributionSpeeds from 'components/Docs/Unitroller/DistributionSpeeds';

const UnitrollerWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function Unitroller() {
  return (
    <MainLayout tabType="unitroller">
      <UnitrollerWrapper>
        <Label marginBottom>Unitroller</Label>
        <Introduction />
        <Architecture />
        <EnterMarkets />
        <ExitMarket />
        <GetAssetIn />
        <CollateralFactor />
        <GetAccountLiquidity />
        <CloseFactor />
        <LiquidationIncentive />
        <KeyEvents />
        <ErrorCodes />
        <DistributionSpeeds />
        <ClaimCOMP />
        <MarketMetadata />
      </UnitrollerWrapper>
    </MainLayout>
  );
}

export default Unitroller;
