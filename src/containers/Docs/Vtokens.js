import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/Vtokens/Introduction';
import Mint from 'components/Docs/Vtokens/Mint';
import Redeem from 'components/Docs/Vtokens/Redeem';
import RedeemUnderlying from 'components/Docs/Vtokens/RedeemUnderlying';
import Borrow from 'components/Docs/Vtokens/Borrow';
import RepayBorrow from 'components/Docs/Vtokens/RepayBorrow';
import RepayBorrowBehalf from 'components/Docs/Vtokens/RepayBorrowBehalf';
import LiquidateBorrow from 'components/Docs/Vtokens/LiquidateBorrow';
import KeyEvents from 'components/Docs/Vtokens/KeyEvents';
import ErrorCodes from 'components/Docs/Vtokens/ErrorCodes';
import ExchangeRate from 'components/Docs/Vtokens/ExchangeRate';
import GetCash from 'components/Docs/Vtokens/GetCash';
import TotalBorrows from 'components/Docs/Vtokens/TotalBorrows';
import BorrowBalance from 'components/Docs/Vtokens/BorrowBalance';
import BorrowRate from 'components/Docs/Vtokens/BorrowRate';
import TotalSupply from 'components/Docs/Vtokens/TotalSupply';
import UnderlyingBalance from 'components/Docs/Vtokens/UnderlyingBalance';
import SupplyRate from 'components/Docs/Vtokens/SupplyRate';
import TotalReserves from 'components/Docs/Vtokens/TotalReserves';
import ReserveFactor from 'components/Docs/Vtokens/ReserveFactor';

const VtokensWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function Vtokens() {
  return (
    <MainLayout tabType="vtokens">
      <VtokensWrapper>
        <Label marginBottom>vTokens</Label>
        <Introduction />
        <Mint />
        <Redeem />
        <RedeemUnderlying />
        <Borrow />
        <RepayBorrow />
        <RepayBorrowBehalf />
        <LiquidateBorrow />
        <KeyEvents />
        <ErrorCodes />
        <ExchangeRate />
        <GetCash />
        <TotalBorrows />
        <BorrowBalance />
        <BorrowRate />
        <TotalSupply />
        <UnderlyingBalance />
        <SupplyRate />
        <TotalReserves />
        <ReserveFactor />
      </VtokensWrapper>
    </MainLayout>
  );
}

export default Vtokens;
