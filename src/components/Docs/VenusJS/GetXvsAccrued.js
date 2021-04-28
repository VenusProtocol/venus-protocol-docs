import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetXvsAccruedWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetXvsAccrued() {
  const formula = `  (async function () {
    const acc = await Venus.xvs.getXvsAccrued('0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5');
    console.log('Accrued', acc);
  })().catch(console.error);`;

  return (
    <GetXvsAccruedWrapper id="venusJS-get-xvs-accrued">
      <Label title marginBottom>
        Get Xvs Accrued
      </Label>
      <Description>
        Get the amount of XVS tokens accrued but not yet claimed by an address.
      </Description>
      <ParameterSection>
        <Parameter name="_address">
          {` (string) The address in which to find the XVS accrued.`}
        </Parameter>
        <Parameter name="[_provider]">
          {` (Provider | string) An Ethers.js provider or valid network name string.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns a string of the numeric accruement of XVS. The value is scaled up by 18 decimal places.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetXvsAccruedWrapper>
  );
}

export default GetXvsAccrued;
