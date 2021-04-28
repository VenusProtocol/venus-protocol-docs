import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import arrowRight from 'assets/img/Docs/GetStarted/arrow-right.png';

const GuidesWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 49px;
  }

  .item {
    padding: 16px 35px;
    @media (max-width: 768px) {
      padding: 16px 20px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-light-yellow);
    }

    .order-number {
      width: 32px;
      height: 32px;
      min-width: 32px;
      min-height: 32px;
      border-radius: 50%;
      background-color: var(--color-light-yellow);
      font-size: 18px;
      font-weight: 900;
      color: var(--color-white);
      margin-right: 32px;
    }

    a {
      font-size: 20px;
      font-weight: 900;
      line-height: normal;
      color: var(--color-text-main);
      margin-right: 20px;
      &:hover {
        color: var(--color-link-yellow);
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const guideList = [
  { label: 'Setting up an BSC Development Environment', url: '/#' },
  { label: 'Supplying Assets to the Venus Protocol', url: '/#' },
  { label: 'Borrowing Assets from the Venus Protocol', url: '/#' },
  { label: 'Building a Governance Interface', url: '/#' },
  { label: 'Delegation & Voting', url: '/#' },
  { label: 'Contributing to the Protocol', url: '/#' }
];

function Guides() {
  return (
    <GuidesWrapper id="getstarted-guides">
      <Label title marginBottom>
        Guides
      </Label>
      {guideList.map((g, index) => (
        <div
          className="flex align-center just-between pointer item"
          key={index}
        >
          <div className="flex align-center">
            <div className="flex align-center just-center order-number">
              {index + 1}
            </div>
            <a href={g.url} target="_blank">
              {g.label}
            </a>
          </div>
          <img src={arrowRight} alt="arrow right" />
        </div>
      ))}
    </GuidesWrapper>
  );
}

export default Guides;
