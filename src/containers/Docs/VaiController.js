import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import MintVai from 'components/Docs/VaiController/MintVai';
import RepayVai from 'components/Docs/VaiController/RepayVai';
import LiquidateVai from 'components/Docs/VaiController/LiquidateVai';
import KeyEvents from 'components/Docs/VaiController/KeyEvents';
import ErrorCodes from 'components/Docs/VaiController/ErrorCodes';

const VaiWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function VaiController() {
  return (
    <MainLayout tabType="vaicontroller">
      <VaiWrapper>
        <Label marginBottom>VAI Controller</Label>
        <MintVai />
        <RepayVai />
        <LiquidateVai />
        <KeyEvents />
        <ErrorCodes />
      </VaiWrapper>
    </MainLayout>
  );
}

export default VaiController;
