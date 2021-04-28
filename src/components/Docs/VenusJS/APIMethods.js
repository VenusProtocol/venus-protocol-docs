import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const APIMethodsWrapper = styled.div`
  margin-bottom: 50px;
`;

function APIMethods() {
  return (
    <APIMethodsWrapper id="venusJS-api-methods">
      <Label title marginBottom>
        API Methods
      </Label>
      <Description>
        These methods facilitate HTTP requests to the Venus API.
      </Description>
    </APIMethodsWrapper>
  );
}

export default APIMethods;
