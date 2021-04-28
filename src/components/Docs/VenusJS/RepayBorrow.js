import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const RepayBorrowWrapper = styled.div`
  margin-bottom: 50px;
`;

function RepayBorrow() {
  const formula = `  const venus = new Venus(window.ethereum);

  (async function() {
  
    console.log('Repaying Dai borrow...');
    const address = null; // set this to any address to repayBorrowBehalf
    const trx = await venus.repayBorrow(Venus.DAI, 32, address);
  
    console.log('Ethers.js transaction object', trx);
  
  })().catch(console.error);`;

  return (
    <RepayBorrowWrapper id="venusJS-repay-borrow">
      <Label title marginBottom>
        Repay Borrow
      </Label>
      <Description>
        Repays a borrowed BSC asset for the user or on behalf of another
        BSC address.
      </Description>
      <ParameterSection>
        <Parameter name="asset">
          {` (string) A string of the asset that was borrowed (must be a supported underlying asset).`}
        </Parameter>
        <Parameter name="amount">
          {` (number | string | BigNumber) A string, number, or BigNumber object of the amount of an asset to borrow. Use the mantissa boolean in the options parameter to indicate if this value is scaled up (so there are no decimals) or in its natural scale.`}
        </Parameter>
        <Parameter name="[borrower]">
          {` (string | null) The BSC address of the borrower to repay an open borrow for. Set this to null if the user is repaying their own borrow.`}
        </Parameter>
        <Parameter name="noApprove">
          {` (boolean) Explicitly prevent this method from attempting an ERC-20 approve transaction prior to sending the subsequent repayment transaction.`}
        </Parameter>
        <Parameter name="[options]">
          {` (CallOptions) Call options and Ethers.js overrides for the transaction. A passed gasLimit will be used in both the approve (if not supressed) and repayBorrow or repayBorrowBehalf transactions.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns an Ethers.js transaction object of the repayBorrow or repayBorrowBehalf transaction.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </RepayBorrowWrapper>
  );
}

export default RepayBorrow;
