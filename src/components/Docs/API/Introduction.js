import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const IntroductionWrapper = styled.div`
  margin-bottom: 20px;
`;

function Introduction() {
  return (
    <IntroductionWrapper id="api-introduction">
      <Label title marginBottom>
        Introduction
      </Label>
      <Description>
        The Venus API input and output formats are specified by Protocol
        Buffers, known colloquially as protobufs. Unlike typical protobufs
        endpoints, the Venus endpoints support JSON for input and output in
        addition to the protobufs binary format. To use JSON in both the input
        and the output, specify the headers "Content-Type: application/json" and
        "Accept: application/json" in the request.
      </Description>
      <Description>
        API keys are currently optional, and are included in the HTTP header
        venus-api-key; you can request keys from Venus in the{' '}
        <a href="https://t.me/VenusProtocol" target="_blank" rel="noreferrer">
          #Venus Telegram
        </a>{' '}
        channel. In the future, API keys will be required access the API.
      </Description>
    </IntroductionWrapper>
  );
}

export default Introduction;
