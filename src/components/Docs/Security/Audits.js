import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import arrowRight from 'assets/img/Docs/GetStarted/arrow-right.png';

const AuditsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  .item {
    padding: 30px;
    @media (max-width: 768px) {
      padding: 20px;
    }

    border-top: 1px solid var(--color-light-yellow);

    .order-number {
      width: 30px;
      height: 30px;
      min-width: 30px;
      min-height: 30px;
      border-radius: 50%;
      background-color: var(--color-light-yellow);
      font-size: 20px;
      font-weight: 900;
      color: var(--color-white);
      margin-right: 32px;
    }

    p {
      font-size: 20px;
      font-weight: 900;
      line-height: normal;
      color: var(--color-text-main);
      margin-right: 20px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const auditList = [{ label: 'Certik - Venus Protocol' }];

function Audits() {
  return (
    <AuditsWrapper id="security-audits">
      <Label title marginBottom>
        Audits
      </Label>
      {auditList.map((g, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="https://certik.foundation/projects/swipe"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="flex align-center just-between pointer item"
            key={index}
          >
            <div className="flex align-center">
              <div className="flex align-center just-center order-number">
                {index + 1}
              </div>
              <p>{g.label}</p>
            </div>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </a>
      ))}
    </AuditsWrapper>
  );
}

export default Audits;
