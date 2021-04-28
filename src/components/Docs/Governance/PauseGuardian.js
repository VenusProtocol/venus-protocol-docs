import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const PauseGuardianWrapper = styled.div`
  margin-bottom: 50px;
`;

function PauseGuardian() {
  return (
    <PauseGuardianWrapper id="governance-pause-guardian">
      <Label title marginBottom>
        Pause Guardian
      </Label>
      <Description>
        The Unitroller contract designates a Pause Guardian address capable of
        disabling protocol functionality. Used only in the event of an
        unforeseen vulnerability, the Pause Guardian has one and only one
        ability: to disable a select set of functions: Mint, Borrow, Transfer,
        and Liquidate. The Pause Guardian cannot unpause an action, nor can it
        ever prevent users from calling Redeem, or Repay Borrow to close
        positions and exit the protocol.
      </Description>
      <Description>
        XVS token-holders designate the Pause Guardian address, which is
        currently held by Venus Labs, Inc.
      </Description>
    </PauseGuardianWrapper>
  );
}

export default PauseGuardian;
