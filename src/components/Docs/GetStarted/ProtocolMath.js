import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const ProtocolMathWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 50px;
  }

  .description {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

function ProtocolMath() {
  return (
    <ProtocolMathWrapper id="getstarted-protocol-math">
      <Label title marginBottom>
        Protocol Math
      </Label>
      <Description>
        The Venus protocol contracts use a system of exponential math,
        <a
          href="https://github.com/SwipeWallet/venus-protocol/blob/master/contracts/Exponential.sol"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          Exponential.sol
        </a>
        , in order to represent fractional quantities with sufficient precision.
      </Description>
      <Description>
        Most numbers are represented as a mantissa, an unsigned integer scaled
        by 1 * 10 ^ 18, in order to perform basic math at a high level of
        precision.
      </Description>
    </ProtocolMathWrapper>
  );
}

export default ProtocolMath;
