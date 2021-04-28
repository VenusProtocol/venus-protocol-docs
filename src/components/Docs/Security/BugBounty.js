import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import Parameter from 'components/Basic/Parameter';
import { SubSection, ParameterSection } from 'components/Basic/Section';

const BugBountyWrapper = styled.div`
  margin-bottom: 50px;

  .last-section {
    font-size: 20px;
    font-weight: 900;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

function BugBounty() {
  return (
    <BugBountyWrapper id="security-bug-bounty">
      <Label title marginBottom>
        Bug Bountry Program
      </Label>
      <Description>
        Security is core to our values, and we value the input of hackers acting
        in good faith to help us maintain the highest standard for the security
        and safety of the BSC ecosystem. The Venus protocol, while it has
        gone through professional audits and formal verification, depends on new
        technology that may contain undiscovered vulnerabilities.
      </Description>
      <Description>
        Venus encourages the community to audit our contracts and security; we
        also encourage the responsible disclosure of any issues. This program is
        intended to recognize the value of working with the community of
        independent security researchers, and sets out our definition of good
        faith in the context of finding and reporting vulnerabilities, as well
        as what you can expect from us in return.
      </Description>
      <SubSection>
        <Label marginBottom>Rewards</Label>
        <Description>
          Venus offers substantial rewards for discoveries that can prevent the
          loss of assets, the freezing of assets, or harm to a user,
          commensurate with the severity and exploitability of the
          vulnerability. Venus will pay a reward of $500 to $150,000 for
          eligible discoveries according to the terms and conditions provided
          below.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>Scope</Label>
        <Description>
          The primary scope of the bug bounty program is for vulnerabilities
          affecting the on-chain Venus Protocol, deployed to the BSC
          Mainnet, for contract addresses listed in this developer
          documentation.
        </Description>
        <Description>
          This list may change as new contracts are deployed, or as existing
          contracts are removed from usage. Vulnerabilities in contracts built
          on top of the Protocol by third-party developers (such as smart
          contract wallets) are not in-scope, nor are vulnerabilities that
          require ownership of an admin key.
        </Description>
        <Description>
          The secondary scope of the bug bounty program is for vulnerabilities
          affecting the Venus Interface hosted at app.venus.finance that could
          conceivably result in exploitation of user accounts.
        </Description>
        <Description>
          Finally, test contracts (Rinkeby and other testnets) and staging
          servers are out of scope, unless the discovered vulnerability also
          affects the Venus Protocol or Interface, or could otherwise be
          exploited in a way that risks user funds.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>Disclosure</Label>
        <Description>
          Submit all bug bounty disclosures to security@venus.finance. The
          disclosure must include clear and concise steps to reproduce the
          discovered vulnerability in either written or video format. Venus will
          follow up promptly with acknowledgement of the disclosure.
        </Description>
      </SubSection>
      <SubSection>
        <Label marginBottom>Terms and Conditions</Label>
        <Description>
          To be eligible for bug bounty reward consideration, you must:
        </Description>
        <ParameterSection>
          <Parameter>
            Identify an original, previously unreported, non-public
            vulnerability within the scope of the Venus bug bounty program as
            described above.
          </Parameter>
          <Parameter>
            Include sufficient detail in your disclosure to enable our engineers
            to quickly reproduce, understand, and fix the vulnerability.
          </Parameter>
          <Parameter>Be at least 18 years of age.</Parameter>
          <Parameter>
            Be reporting in an individual capacity, or if employed by a company,
            reporting with the company’s written approval to submit a disclosure
            to Venus.
          </Parameter>
          <Parameter>
            Not be subject to US sanctions or reside in a US-embargoed country.
          </Parameter>
          <Parameter>
            Not be a current or former Venus employee, vendor, contractor, or
            employee of a Venus vendor or contractor.
          </Parameter>
        </ParameterSection>
        <Description>
          To encourage vulnerability research and to avoid any confusion between
          good-faith hacking and malicious attack, we require that you:
        </Description>
        <ParameterSection>
          <Parameter>
            Play by the rules, including following the terms and conditions of
            this program and any other relevant agreements. If there is any
            inconsistency between this program and any other relevant
            agreements, the terms of this program will prevail.
          </Parameter>
          <Parameter>
            Report any vulnerability you’ve discovered promptly.
          </Parameter>
          <Parameter>
            Avoid violating the privacy of others, disrupting our systems,
            destroying data, or harming user experience.
          </Parameter>
          <Parameter>
            Use only security@venus.finance to discuss vulnerabilities with us.
          </Parameter>
          <Parameter>
            Keep the details of any discovered vulnerabilities confidential
            until they are fixed.
          </Parameter>
          <Parameter>
            Perform testing only on in-scope systems, and respect systems and
            activities which are out-of-scope.
          </Parameter>
          <Parameter>
            Only interact with accounts you own or with explicit permission from
            the account holder.
          </Parameter>
          <Parameter>
            Not engage in blackmail, extortion, or any other unlawful conduct.
          </Parameter>
        </ParameterSection>
        <Description>
          When working with us according to this program, you can expect us to:
        </Description>
        <ParameterSection>
          <Parameter>
            Pay generous rewards for eligible discoveries based on the severity
            and exploitability of the discovery, at Venus’s sole discretion
          </Parameter>
          <Parameter>
            Extend Safe Harbor for your vulnerability research that is related
            to this program, meaning we will not threaten or bring any legal
            action against anyone who makes a good faith effort to comply with
            our bug bounty program.
          </Parameter>
          <Parameter>
            Work with you to understand and validate your report, including a
            timely initial response to the submission.
          </Parameter>
          <Parameter>
            Work to remediate discovered vulnerabilities in a timely manner.
          </Parameter>
          <Parameter>
            Recognize your contribution to improving our security if you are the
            first to report a unique vulnerability, and your report triggers a
            code or configuration change.
          </Parameter>
        </ParameterSection>
        <div className="last-section">
          All reward determinations, including eligibility and payment amount,
          are made at Venus’s sole discretion. Venus reserves the right to
          reject submissions and alter the terms and conditions of this program.
        </div>
      </SubSection>
    </BugBountyWrapper>
  );
}

export default BugBounty;
