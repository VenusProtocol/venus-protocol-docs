import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetXvsBalanceWrapper = styled.div`
  margin-bottom: 50px;
`;

function GetXvsBalance() {
  const formula = `  (async function () {
    const bal = await Venus.xvs.getXvsBalance('0x2775b1c75658Be0F640272CCb8c72ac986009e38');
    console.log('Balance', bal);
  })().catch(console.error);`;

  return (
    <GetXvsBalanceWrapper id="venusJS-get-xvs-balance">
      <Label title marginBottom>
        Get Xvs Balance
      </Label>
      <Description>
        Get the balance of XVS tokens held by an address.
      </Description>
      <ParameterSection>
        <Parameter name="_address">
          {` (string) The address in which to find the XVS balance.`}
        </Parameter>
        <Parameter name="[_provider]">
          {` (Provider | string) An Ethers.js provider or valid network name string.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (string) Returns a string of the numeric balance of XVS. The value is scaled up by 18 decimal places.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </GetXvsBalanceWrapper>
  );
}

export default GetXvsBalance;
