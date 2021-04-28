import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/Governance/Introduction';
import XVS from 'components/Docs/Governance/XVS';
import Delegate from 'components/Docs/Governance/Delegate';
import DelegateBySignature from 'components/Docs/Governance/DelegateBySignature';
import GetCurrentVotes from 'components/Docs/Governance/GetCurrentVotes';
import GetPriorVotes from 'components/Docs/Governance/GetPriorVotes';
import GovernorAlpha from 'components/Docs/Governance/GovernorAlpha';
import QuorumVotes from 'components/Docs/Governance/QuorumVotes';
import ProposalThreshold from 'components/Docs/Governance/ProposalThreshold';
import ProposalMaxOperations from 'components/Docs/Governance/ProposalMaxOperations';
import VotingDelay from 'components/Docs/Governance/VotingDelay';
import VotingPeriod from 'components/Docs/Governance/VotingPeriod';
import Propose from 'components/Docs/Governance/Propose';
import Queue from 'components/Docs/Governance/Queue';
import Execute from 'components/Docs/Governance/Execute';
import Cancel from 'components/Docs/Governance/Cancel';
import GetActions from 'components/Docs/Governance/GetActions';
import GetReceipt from 'components/Docs/Governance/GetReceipt';
import State from 'components/Docs/Governance/State';
import CastVote from 'components/Docs/Governance/CastVote';
import CastVoteBySignature from 'components/Docs/Governance/CastVoteBySignature';
import Timelock from 'components/Docs/Governance/Timelock';
import PauseGuardian from 'components/Docs/Governance/PauseGuardian';

const GovernanceWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function Governance() {
  return (
    <MainLayout tabType="governance">
      <GovernanceWrapper>
        <Label marginBottom>Governance</Label>
        <Introduction />
        <XVS />
        <Delegate />
        <DelegateBySignature />
        <GetCurrentVotes />
        <GetPriorVotes />
        <GovernorAlpha />
        <QuorumVotes />
        <ProposalThreshold />
        <ProposalMaxOperations />
        <VotingDelay />
        <VotingPeriod />
        <Propose />
        <Queue />
        <Execute />
        <Cancel />
        <GetActions />
        <GetReceipt />
        <State />
        <CastVote />
        <CastVoteBySignature />
        <Timelock />
        <PauseGuardian />
      </GovernanceWrapper>
    </MainLayout>
  );
}

export default Governance;
