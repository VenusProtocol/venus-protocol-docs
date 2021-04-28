import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetAssetInWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }
`;

function GetAssetIn() {
  const unitrollerFormula = 'function getAssetsIn(address account) view returns (address[] memory)';
  const solidityFormula = 'Unitroller troll = Unitroller(0xABCD...);\naddress[] memory markets = troll.getAssetsIn(0xMyAccount);';
  const web3Formular = 'const troll = Unitroller.at(0xABCD...);\nconst markets = await troll.methods.getAssetsIn(vTokens).call();';

  return (
    <GetAssetInWrapper id="unitroller-get-assets-in">
      <Label title marginBottom>
        Get Assets In
      </Label>
      <Description>
        Get the list of markets an account is currently entered into. In order
        to supply collateral or borrow in a market, it must be entered first.
        Entered markets count towards <a href="#unitroller-get-account-liquidity">account liquidity</a> calculations.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="account">
          : The account whose list of entered markets shall be queried.
        </Parameter>
        <Parameter name="RETURN">
          : The address of each market which is currently entered into.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </GetAssetInWrapper>
  );
}

export default GetAssetIn;
