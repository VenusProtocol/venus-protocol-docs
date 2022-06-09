import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const BorrowWrapper = styled.div`
  margin-bottom: 50px;
`;

function Borrow() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function() {
  
    const daiScaledUp = '32000000000000000000';
    const trxOptions = { mantissa: true };
  
    console.log('Borrowing 32 Dai...');
    const trx = await venus.borrow(Venus.DAI, daiScaledUp, trxOptions);
  
    console.log('Ethers.js transaction object', trx);
  
  })().catch(console.error);`;

  return (
    <BorrowWrapper id="venusJS-borrow">
      <Label title marginBottom>
        Borrow
      </Label>
      <Description>
        Borrows an BSC asset from the Venus Protocol for the user. The user's
        address must first have supplied collateral and entered a corresponding
        market.
      </Description>
      <ParameterSection>
        <Parameter name="asset">
          {` (string) A string of the asset to borrow (must be a supported underlying asset).`}
        </Parameter>
        <Parameter name="amount">
          {` (number | string | BigNumber) A string, number, or BigNumber object of the amount of an asset to borrow. Use the mantissa boolean in the options parameter to indicate if this value is scaled up (so there are no decimals) or in its natural scale.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the borrow transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </BorrowWrapper>
  );
}

export default Borrow;
