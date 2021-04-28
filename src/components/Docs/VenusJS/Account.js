import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const AccountWrapper = styled.div`
  margin-bottom: 50px;
`;

function Account() {
  const formula = `  (async function() {
    const account = await Venus.api.account({
      "addresses": "0xB61C5971d9c0472befceFfbE662555B78284c307",
      "network": "testnet"
    });
  
    let daiBorrowBalance = 0;
    if (Object.isExtensible(account) && account.accounts) {
      account.accounts.forEach((acc) => {
        acc.tokens.forEach((tok) => {
          if (tok.symbol === Venus.cDAI) {
            daiBorrowBalance = +tok.borrow_balance_underlying.value;
          }
        });
      });
    }
  
    console.log('daiBorrowBalance', daiBorrowBalance);
  })().catch(console.error);`;

  return (
    <AccountWrapper id="venusJS-account">
      <Label title marginBottom>
        Account
      </Label>
      <Description>
        Makes a request to the AccountService API. The Account API retrieves
        information for various accounts which have interacted with the
        protocol. For more details, see the Venus API documentation.
      </Description>
      <ParameterSection>
        <Parameter name="[provider]">
          {` (object) A JavaScript object of API request parameters.`}
        </Parameter>
        <Parameter name="RETURN">
          {` (object) Returns the HTTP response body or error.`}
        </Parameter>
      </ParameterSection>
      <HighLighter>{formula}</HighLighter>
    </AccountWrapper>
  );
}

export default Account;
