import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const IntroductionWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function Introduction() {
  return (
    <IntroductionWrapper id="unitroller-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        The Unitroller is the risk management layer of the Venus protocol; it
        determines how much collateral a user is required tomaintain, and
        whether (and by now much) a user can be liquidated. Each time a user
        interacts with vToken, the Unitroller is asked to approve or deny the
        transaction.The Unitroller maps user balanes to price (via the Price
        Oracle) to risk weights (Called <a href="#unitroller-collateral-factor">Collateral Factors</a>) to make
        itsdeterminations. Users explicitly list which assets they would like
        included in their risk scoring, by calling <a href="#unitroller-enter-markets">Enter Markets</a>{' '}
        and <a href="#unitroller-exit-market">ExitMarket</a>.
      </Description>
    </IntroductionWrapper>
  );
}

export default Introduction;
