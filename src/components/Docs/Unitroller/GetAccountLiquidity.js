import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import Parameter from 'components/Basic/Parameter';
import { ParameterSection } from 'components/Basic/Section';

const GetAccountLiquidityWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  .description {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  h3 {
    margin-bottom: 50px;
  }
`;

function GetAccountLiquidity() {
  const unitrollerFormula =
    'function getAccountLiquidity(address account) view returns (uint, uint, uint)';
  const solidityFormula =
    'Unitroller troll = Unitroller(0xABCD...);\n(uint error, uint liquidity, uint shortfall) = troll.getAccountLiquidity(msg.caller);\nrequire(error == 0, "join the Discord");\nrequire(shortfall == 0, "account underwater");\nrequire(liquidity > 0, "account has excess collateral");';
  const web3Formular =
    'const troll = Unitroller.at(0xABCD...);\nconst result = await troll.methods.getAccountLiquidity(0xBorrower).call();\nconst {0: error, 1: liquidity, 2: shortfall} = result;';

  return (
    <GetAccountLiquidityWrapper id="unitroller-get-account-liquidity">
      <Label title marginBottom>
        Get Account Liquidity
      </Label>
      <Description>
        Account Liquidity represents the USD value borrowable by a user, before
        it reaches liquidation. Users with a shortfall (negative liquidity) are
        subject to liquidation, and can’t withdraw or borrow assets until
        Account Liquidity is positive again.
      </Description>
      <Description>
        For each market the user has{' '}
        <a href="#unitroller-enter-markets">entered</a> into, their supplied
        balance is multiplied by the market’s{' '}
        <a href="#unitroller-collateral-factor">collateral factor</a>, and
        summed; borrow balances are then subtracted, to equal Account Liquidity.
        Borrowing an asset reduces Account Liquidity for each USD borrowed;
        withdrawing an asset reduces Account Liquidity by the asset’s collateral
        factor times each USD withdrawn.
      </Description>
      <Description>
        Because the Venus Protocol exclusively uses unsigned integers, Account
        Liquidity returns either a surplus or shortfall.
      </Description>
      <Label marginTop>Unitroller</Label>
      <HighLighter>{unitrollerFormula}</HighLighter>
      <ParameterSection>
        <Parameter name="account">
          : The account whose liquidity shall be calculated.
        </Parameter>
        <Parameter name="RETURN">
          : Tuple of values (error, liquidity, shortfall). The error shall be 0
          on success, otherwise an{' '}
          <a href="#unitroller-error-codes">Error code</a>. A non-zero liquidity
          value indicates the account has available{' '}
          <a href="#unitroller-get-account-liquidity">account liquidity</a>. A
          non-zero shortfall value indicates the account is currently below
          his/her collateral requirement and is subject to liquidation. At most
          one of liquidity or shortfall shall be non-zero.
        </Parameter>
      </ParameterSection>
      <Label marginTop>Solidity</Label>
      <HighLighter>{solidityFormula}</HighLighter>
      <Label marginTop>Web3 1.0</Label>
      <HighLighter>{web3Formular}</HighLighter>
    </GetAccountLiquidityWrapper>
  );
}

export default GetAccountLiquidity;
