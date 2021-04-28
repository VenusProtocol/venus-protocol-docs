import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import diagram from 'assets/img/Docs/governance/gov_diagram.png';

const IntroductionWrapper = styled.div`
  margin-bottom: 50px;
  .image-section {
    width: 100%;
    max-height: auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    img {
      width: 80%;
      max-width: 800px;
      height: auto;
    }
  }
`;

function Introduction() {
  return (
    <IntroductionWrapper id="governance-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        The Venus protocol is governed and upgraded by XVS token-holders, using
        three distinct components; the XVS token, governance module (Governor
        Alpha), and Timelock. Together, these contracts allow the community to
        propose, vote, and implement changes through the administrative
        functions of a vToken or the unitroller. Proposals can include changes
        like adjusting an interest rate model, to adding support for a new
        asset.
      </Description>
      <Description>
        vTokens are the primary means of interacting with the Venus Protocol;
        when a user mints, redeems, borrows, repays a borrow, liquidates a
        borrow, or transfers vTokens, she will do so using the vToken contract.
      </Description>
      <div className="image-section">
        <img src={diagram} alt="Diagram" />
      </div>
    </IntroductionWrapper>
  );
}

export default Introduction;
