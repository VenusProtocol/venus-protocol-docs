import React from 'react';
import styled from 'styled-components';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/OpenPriceFee/Introduction';

const OpenPriceFeeWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function OpenPriceFee() {
  return (
    <MainLayout tabType="prices">
      <OpenPriceFeeWrapper>
        <Introduction />
      </OpenPriceFeeWrapper>
    </MainLayout>
  );
}

export default OpenPriceFee;
