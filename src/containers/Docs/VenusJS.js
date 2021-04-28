import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/VenusJS/Introduction';
import VenusConstrutor from 'components/Docs/VenusJS/VenusConstrutor';
import APIMethods from 'components/Docs/VenusJS/APIMethods';
import Account from 'components/Docs/VenusJS/Account';
import VToken from 'components/Docs/VenusJS/VToken';
import MarketHistory from 'components/Docs/VenusJS/MarketHistory';
import Governance from 'components/Docs/VenusJS/Governance';
import VTokenMethods from 'components/Docs/VenusJS/VTokenMethods';
import Supply from 'components/Docs/VenusJS/Supply';
import Redeem from 'components/Docs/VenusJS/Redeem';
import Borrow from 'components/Docs/VenusJS/Borrow';
import RepayBorrow from 'components/Docs/VenusJS/RepayBorrow';
import XVSMethod from 'components/Docs/VenusJS/XVSMethod';
import ToChecksumAddress from 'components/Docs/VenusJS/ToChecksumAddress';
import GetXvsBalance from 'components/Docs/VenusJS/GetXvsBalance';
import GetXvsAccrued from 'components/Docs/VenusJS/GetXvsAccrued';
import ClaimXvs from 'components/Docs/VenusJS/ClaimXvs';
import Delegate from 'components/Docs/VenusJS/Delegate';
import DelegateBySig from 'components/Docs/VenusJS/DelegateBySig';
import CreateDelegateSignature from 'components/Docs/VenusJS/CreateDelegateSignature';
import UnitrollerMethods from 'components/Docs/VenusJS/UnitrollerMethods';
import EnterMarkets from 'components/Docs/VenusJS/EnterMarkets';
import ExitMarket from 'components/Docs/VenusJS/ExitMarket';
import EthereumMethods from 'components/Docs/VenusJS/EthereumMethods';
import Read from 'components/Docs/VenusJS/Read';
import Trx from 'components/Docs/VenusJS/Trx';
import GetBalance from 'components/Docs/VenusJS/GetBalance';
import GovernanceMethods from 'components/Docs/VenusJS/GovernanceMethods';
import CastVote from 'components/Docs/VenusJS/CastVote';
import CastVoteBySig from 'components/Docs/VenusJS/CastVoteBySig';
import CreateVoteSignature from 'components/Docs/VenusJS/CreateVoteSignature';
import PriceFeedMethods from 'components/Docs/VenusJS/PriceFeedMethods';
import GetPrice from 'components/Docs/VenusJS/GetPrice';
import UtilityMethods from 'components/Docs/VenusJS/UtilityMethods';
import GetAddress from 'components/Docs/VenusJS/GetAddress';
import GetABI from 'components/Docs/VenusJS/GetABI';
import GetNetworkNameWithChainID from 'components/Docs/VenusJS/GetNetworkNameWithChainID';

const VenusJSWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function VenusJS() {
  return (
    <MainLayout tabType="venusJS">
      <VenusJSWrapper>
        <Label marginBottom>Venus.js</Label>
        <Introduction />
        <VenusConstrutor />
        <APIMethods />
        <Account />
        <VToken />
        <MarketHistory />
        <Governance />
        <VTokenMethods />
        <Supply />
        <Redeem />
        <Borrow />
        <RepayBorrow />
        <XVSMethod />
        <ToChecksumAddress />
        <GetXvsBalance />
        <GetXvsAccrued />
        <ClaimXvs />
        <Delegate />
        <DelegateBySig />
        <CreateDelegateSignature />
        <UnitrollerMethods />
        <EnterMarkets />
        <ExitMarket />
        <EthereumMethods />
        <Read />
        <Trx />
        <GetBalance />
        <GovernanceMethods />
        <CastVote />
        <CastVoteBySig />
        <CreateVoteSignature />
        <PriceFeedMethods />
        <GetPrice />
        <UtilityMethods />
        <GetAddress />
        <GetABI />
        <GetNetworkNameWithChainID />
      </VenusJSWrapper>
    </MainLayout>
  );
}

export default VenusJS;
