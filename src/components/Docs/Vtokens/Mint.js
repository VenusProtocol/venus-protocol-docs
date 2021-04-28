import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const MintWrapper = styled.div`
  margin-bottom: 50px;
`;

function Mint() {
  const VBep20Formula = 'function mint(uint mintAmount) returns (uint)';
  const VBnbFormula = 'function mint() payable';
  const solidityFormula =
    'Bep20 underlying = Bep20(0xToken...);     // get a handle for the underlying asset\nVBep20 vToken = VBep20(0x3FDA...);        // get a handle for the corresponding vToken Contract\nunderlying.approve(address(vToken), 100); // approve the transfer\nassert(vToken.mint(100) == 0);            // mint the vTokens and assert there is no error';
  const web3Formula =
    'const vToken = VBep20.at(0x3FDB...);\nawait vToken.methods.mint().send({from: myAccount, value: 50});';
  return (
    <MintWrapper id="vtokens-mint">
      <Label title marginBottom>
        Mint
      </Label>
      <Description>
        The mint function transfers an asset into the protocol, which begins
        accumulating interest based on the current{' '}
        <a href="#vtokens-supply-rate">Supply Rate</a> for The user receives a
        quantity of vTokens equal to the underlying tokens tokens supplied,
        divided by the current{' '}
        <a href="#vtokens-exchange-rate">Exchange Rate</a>.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20</Label>
        <HighLighter>{VBep20Formula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.sender">
            : The account which shall supply the asset, and own the minted
            vTokens.
          </Parameter>
          <Parameter name="mintAmount">
            : The amount of the asset to be supplied, in units of the underlying
            asset.
          </Parameter>
          <Parameter name="RETURN">
            : 0 on success, otherwise an{' '}
            <a href="#vtokens-error-codes">Error code</a>
          </Parameter>
        </ParameterSection>
        <Description>
          Before supplying an asset, users must first{' '}
          <a href="https://eips.ethereum.org/EIPS/eip-20#approve">approve</a>{' '}
          the vToken to access their token balance.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>VBnb</Label>
        <HighLighter>{VBnbFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="msg.value">
            : <span>payable</span> The amount of ether to be supplied, in wei.
          </Parameter>
          <Parameter name="msg.sender">
            : The account which shall supply the bnb, and own the minted
            vTokens.
          </Parameter>
          <Parameter name="RETURN">: No return, reverts on error.</Parameter>
        </ParameterSection>
      </SubSection>
      <SubSection>
        <Label marginBottom>Solidity</Label>
        <HighLighter>{solidityFormula}</HighLighter>
      </SubSection>
      <SubSection>
        <Label marginBottom>Web3 1.0</Label>
        <HighLighter>{web3Formula}</HighLighter>
      </SubSection>
    </MintWrapper>
  );
}

export default Mint;
