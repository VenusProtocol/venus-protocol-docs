import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GovernanceWrapper = styled.div`
  margin-bottom: 50px;
`;

function Governance() {
  const formula = `  (async function() {
    const proposal = await Venus.api.governance(
      { "proposal_ids": [ 20 ] }, 'proposals'
    );
  
    console.log('proposal', proposal); // JavaScript Object
  })().catch(console.error);`;

  return (
    <GovernanceWrapper id="venusJS-governance">
      <Label title marginBottom>
        Governance
      </Label>
      <Description>
        Makes a request to the GovernanceService API. The Governance Service
        includes three endpoints to retrieve information about XVS accounts. For
        more details, see the Venus API documentation.
      </Description>
      <ParameterSection>
        <Parameter name="options">
          {` (object) A JavaScript object of API request parameters.`}
        </Parameter>
        <Parameter name="endpoint">
          {` (string) A string of the name of the corresponding governance service endpoint. Valid values are proposals, voteReceipts, or accounts.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns the HTTP response body or error.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GovernanceWrapper>
  );
}

export default Governance;
