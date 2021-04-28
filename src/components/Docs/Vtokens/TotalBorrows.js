import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const TotalBorrowsWrapper = styled.div`
  margin-bottom: 50px;
`;

function TotalBorrows() {
  const vtokenFormula = 'function totalBorrowsCurrent() returns (uint)';
  const solidityFormula =
    'VBep20 vToken = VToken(0x3FDA...);\nuint borrows = vToken.totalBorrowsCurrent();';
  const web3Formula =
    'const vToken = VBnb.at(0x3FDB...);\nconst borrows = (await vToken.methods.totalBorrowsCurrent().call());';
  return (
    <TotalBorrowsWrapper id="vtokens-total-borrows">
      <Label title marginBottom>
        Total Borrow
      </Label>
      <Description>
        Total Borrows is the amount of underlying currently loaned out by the
        market, and the amount upon which interest is accumulated to suppliers
        of the market.
      </Description>
      <SubSection>
        <Label marginBottom>VBep20 / VBnb</Label>
        <HighLighter>{vtokenFormula}</HighLighter>
        <ParameterSection>
          <Parameter name="RETURN">
            : The quantity of underlying asset owned by the contract.
          </Parameter>
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
    </TotalBorrowsWrapper>
  );
}

export default TotalBorrows;
