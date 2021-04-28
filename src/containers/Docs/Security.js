import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import MainLayout from 'containers/Layout/MainLayout';
import Introduction from 'components/Docs/Security/Introduction';
import Audits from 'components/Docs/Security/Audits';
import FormalVerification from 'components/Docs/Security/FormalVerification';
// import EconomicSecurity from 'components/Docs/Security/EconomicSecurity';
// import BugBounty from 'components/Docs/Security/BugBounty';

const SecurityWrapper = styled.div`
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

function Security() {
  return (
    <MainLayout tabType="security">
      <SecurityWrapper>
        <Label marginBottom>Security</Label>
        <Introduction />
        <Audits />
        <FormalVerification />
        {/* <EconomicSecurity /> */}
        {/* <BugBounty /> */}
      </SecurityWrapper>
    </MainLayout>
  );
}

export default Security;
