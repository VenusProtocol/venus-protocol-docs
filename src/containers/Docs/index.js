import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import GetStarted from 'containers/Docs/GetStarted';
import Vtokens from 'containers/Docs/Vtokens';
import Unitroller from 'containers/Docs/Unitroller';
import Governance from 'containers/Docs/Governance';
import OpenPriceFee from 'containers/Docs/OpenPriceFee';
import API from 'containers/Docs/API';
import VenusJS from 'containers/Docs/VenusJS';
import Security from 'containers/Docs/Security';
import VaiController from 'containers/Docs/VaiController';

const DocsContainerWrapper = styled.div``;

function DocsContainer() {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0.5 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <DocsContainerWrapper>
        <Route exact path="/docs/getstarted" component={GetStarted} />
        <Route exact path="/docs/vtokens" component={Vtokens} />
        <Route exact path="/docs/unitroller" component={Unitroller} />
        <Route exact path="/docs/governance" component={Governance} />
        <Route exact path="/docs/prices" component={OpenPriceFee} />
        <Route exact path="/docs/api" component={API} />
        <Route exact path="/docs/venus-js" component={VenusJS} />
        <Route exact path="/docs/security" component={Security} />
        <Route exact path="/docs/vaicontroller" component={VaiController} />
      </DocsContainerWrapper>
    </AnimatedSwitch>
  );
}

export default DocsContainer;
