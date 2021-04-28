import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const PriceFeedMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function PriceFeedMethods() {
  return (
    <PriceFeedMethodsWrapper id="venusJS-price-feed-methods">
      <Label title marginBottom>
        Price Feed Methods
      </Label>
      <Description>
        These methods facilitate interactions with the Open Price Feed smart
        contracts.
      </Description>
    </PriceFeedMethodsWrapper>
  );
}

export default PriceFeedMethods;
