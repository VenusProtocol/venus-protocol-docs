import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const CalculateInterestWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function CalculateInterest() {
  return (
    <CalculateInterestWrapper>
      <Label title marginBottom>
        Calculating Accrued Interest
      </Label>
      <Description>
        Interest rates for each market update on any block in which the ratio of
        borrowed assets to supplied assets in the market has changed. The amount
        interest rates are changed depends on the interest rate model smart
        contract implemented for the market, and the amount of change in the
        ratio of borrowed assets to supplied assets in the market.
      </Description>
      <Description>
        See the interest rate data visualization notebook on{' '}
        <a href="https://xvs-calculator.com/" target="_blank">
          Observable
        </a>{' '}
        to visualize which interest rate model is currently applied to each
        market.
      </Description>
      <Description>
        Historical interest rates can be retrieved from the{' '}
        <span>MarketHistoryServiceAPI</span>.
      </Description>
      <Description>
        Interest accrues to all suppliers and borrowers in a market when any BSC
        address interacts with the market’s vToken contract, calling one of
        these functions: mint, redeem, borrow, or repay. Successful execution of
        one of these functions triggers the accrueInterest method, which causes
        interest to be added to the underlying balance of every supplier and
        borrower in the market. Interest accrues for the current block, as well
        as each prior block in which the accrueInterest method was not triggered
        (no user interacted with the vToken contract). Interest venus only
        during blocks in which the vToken contract has one of the aforementioned
        methods invoked.
      </Description>
      <Description>Here is an example of supply interest accrual:</Description>
      <Description>
        Alice supplies 1 BNB to the Venus protocol. At the time of supply, the
        supplyRatePerBlock is 37893605 Wei, or 0.000000000037893605 BNB per
        block. No one interacts with the vBNB contract for 3 BSC blocks. On the
        subsequent 4th block, Bob borrows some BNB. Alice’s underlying balance
        is now 1.000000000151574420 BNB (which is 37893605 Wei times 4 blocks,
        plus the original 1 BNB). Alice’s underlying BNB balance in subsequent
        blocks will have interest accrued based on the new value of
        1.000000000151574420 BNB instead of the initial 1 BNB. Note that the
        supplyRatePerBlock value may change at any time.
      </Description>
    </CalculateInterestWrapper>
  );
}

export default CalculateInterest;
