import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const VTokenWrapper = styled.div`
  margin-bottom: 50px;
`;

function VToken() {
  const formula = `  (async function() {
    const cDaiData = await Venus.api.vToken({
      "addresses": Venus.util.getAddress(Venus.cDAI)
    });
  
    console.log('cDaiData', cDaiData); // JavaScript Object
  })().catch(console.error);`;

  return (
    <VTokenWrapper id="venusJS-vtoken">
      <Label title marginBottom>
        vToken
      </Label>
      <Description>
        Makes a request to the VTokenService API. The vToken API retrieves
        information about vToken contract interaction. For more details, see the
        Venus API documentation.
      </Description>
      <ParameterSection>
        <Parameter name="options">
          {` (object) A JavaScript object of API request parameters.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns the HTTP response body or error.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </VTokenWrapper>
  );
}

export default VToken;
