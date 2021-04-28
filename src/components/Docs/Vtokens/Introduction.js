import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import vTokens from 'assets/img/Docs/vTokens/vTokens.png';

const IntroductionWrapper = styled.div`
  margin-bottom: 50px;
  .image-section {
    width: 100%;
    max-height: auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    img {
      max-width: 800px;
      width: 100%;
      height: auto;
    }
  }

  .list-section {
    padding: 16px 35px;
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-light-yellow);
    }
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`;

const List = [
  'How do vTokens earn interest?',
  'Do I need to calculate the vToken exchange rate?',
  'Can you walk me through an example?',
  'How do I view my vToken?',
  'Can I transfer vTokens?'
];

function Introduction() {
  return (
    <IntroductionWrapper id="vtokens-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <div className="image-section">
        <img src={vTokens} alt="vTokens" />
      </div>
      <Description>
        Each asset supported by the Venus Protocol is integrated through a
        vToken contract, which is an EIP-20 compliant representation of balances
        supplied to the protocol. By minting vTokens, users (1) earn interest
        through the vToken's exchange rate, which increases in value relative to
        the underlying asset, and (2) gain the ability to use vTokens as
        collateral.
      </Description>
      <Description>
        vTokens are the primary means of interacting with the Venus Protocol;
        when a user mints, redeems, borrows, repays a borrow, liquidates a
        borrow, or transfers vTokens, she will do so using the vToken contract.
      </Description>
      <Description>
        There are currently two types of vTokens: VBep20 and VBnb. Though both
        types expose the EIP-20 interface, VBep20 wraps an underlying BEP-20
        asset, while VBnb simply wraps BNB itself. As such, the core functions
        which involve transferring an asset into the protocol have slightly
        different interfaces depending on the type, each of which is shown
        below.
      </Description>
      {List.map((item, index) => (
        <div className="list-section" key={index}>
          <Label>{item}</Label>
        </div>
      ))}
    </IntroductionWrapper>
  );
}

export default Introduction;
