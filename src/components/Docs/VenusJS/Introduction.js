import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const GovernorAlphaWrapper = styled.div`
  margin-bottom: 50px;
`;

function GovernorAlpha() {
  return (
    <GovernorAlphaWrapper id="venusJS-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        Venus.js is a JavaScript SDK for Binance Smart Chain and the Venus
        Protocol. It wraps around Ethers.js, which is its only dependency. It is
        designed for both the web browser and Node.js.
      </Description>
      <Description>
        The SDK is currently in open beta. For bugs reports and feature
        requests, either create an issue in the GitHub repository or send a
        message in the Development channel of the Venus Telegram.
      </Description>
    </GovernorAlphaWrapper>
  );
}

export default GovernorAlpha;
