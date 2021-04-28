import React from 'react';
import styled from 'styled-components';

const ParameterWrapper = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: var(--color-text-secondary);
  line-height: 33px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  .name {
    font-weight: normal;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-green);
      margin-right: 20px;

      @media (max-width: 768px) {
        margin-right: 10px;
      }
    }
  }

  span:not(:first-child) {
    background-color: var(--color-link-yellow);
    color: var(--color-white);
    border-radius: 13.4px;
    padding: 3px 14px 3px 13px;
  }
`;

const Parameter = ({ name, children }) => (
  <ParameterWrapper>
    <span className="name">{name}</span>
    {children}
  </ParameterWrapper>
);

export default Parameter;
