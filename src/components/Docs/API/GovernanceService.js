import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';
import { SubSection } from 'components/Basic/Section';

const GovernanceServiceWrapper = styled.div`
  margin-bottom: 50px;

  .api-section {
    display: flex;
    align-items: center;

    .name {
      font-size: 20px;
      font-weight: 900;
      margin-right: 20px;
    }

    .desc {
      font-size: 20px;
      color: #aaaaaa;
    }
  }

  .table-section {
    overflow: auto;
  }

  .list-section {
    display: flex;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #aaaaaa;
    padding: 16px 32px;
    min-width: 600px;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 14px;
    }

    .type {
      width: 10%;
      font-weight: 900;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 25%;
      }
    }

    .key {
      width: 30%;
      color: #aaaaaa;
      word-break: break-all;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 25%;
      }
    }

    .desc {
      width: 60%;
      font-weight: 900;
      word-break: break-all;
      padding: 5px;

      &.header {
        color: #aaaaaa;
        font-weight: 900;
      }
      &.response {
        width: 50%;
      }
    }
  }
`;

const requestList = [
  {
    type: 'uint32',
    key: 'proposal_ids',
    description: 'List of ids to filter on, e.g.:?proposal_ids[]=23,25'
  },
  {
    type: 'string',
    key: 'state',
    description:
      'The state of the proposal to filter on, (e.g.: "pending", "active", "canceled", "defeated", "succeeded", "queued", "expired", "executed")'
  },
  {
    type: 'bool',
    key: 'with_detail',
    description:
      'Set as true to include proposer and action data, default is false'
  },
  {
    type: 'uint32',
    key: 'page_size',
    description:
      'Number of proposals to include in the response, default is 10 e.g.\npage_size=10'
  },
  {
    type: 'uint32',
    key: 'page_number',
    description:
      'Pagination number for proposals in the response, default is 1 e.g.\npage_number=1'
  },
  {
    type: 'string',
    key: 'network',
    description: 'The BSC network to use for the request'
  }
];

const responseList = [
  {
    type: 'Error',
    key: 'error',
    description: 'If set and non-zero, indicates an error returning data.'
  },
  {
    type: 'ProposalRequest',
    key: 'request',
    description: 'The request parameters are echoed in the response.'
  },
  {
    type: 'PaginationSummary',
    key: 'pagination_summary',
    description: ''
  },
  {
    type: 'Proposal',
    key: 'proposals',
    description: 'The list of proposals matching the requested filter'
  }
];

const accountList = [
  {
    type: 'bytes',
    key: 'address',
    description: 'The address of the given XVS account'
  },
  {
    type: 'string',
    key: 'display_name',
    description: 'A human readable name that describes who owns the account'
  },
  {
    type: 'string',
    key: 'image_url',
    description: 'A url to retrieve an account image'
  },
  {
    type: 'string',
    key: 'account_url',
    description: 'A url for the organization/user of the XVS account'
  }
];

const proposalList = [
  {
    type: 'uint32',
    key: 'id',
    description: 'Unique id for looking up a proposal'
  },
  {
    type: 'string',
    key: 'title',
    description: 'The title that describes the proposal'
  },
  {
    type: 'string',
    key: 'description',
    description:
      'A description of the actions the proposal will take if successful'
  },
  {
    type: 'DisplayXvsAccount',
    key: 'proposer',
    description:
      'Either null or an object with data about the creator of the proposal (See DisplayXvsAccount). Only populated when request submitted with_detail=true'
  },
  {
    type: 'ProposalAction',
    key: 'actions',
    description:
      'Either null or an array of actions (See ProposalAction) that will be queued and executed if proposal succeeds. Only populated when request submitted with_detail=true'
  },
  {
    type: 'ProposalState',
    key: 'states',
    description:
      'An array of states (See ProposalState) that represent the state transitions that the proposal has undergone'
  },
  {
    type: 'string',
    key: 'for_votes',
    description: 'The number of votes in support of the proposal'
  },
  {
    type: 'string	',
    key: 'against_votes',
    description: 'The number of votes in opposition to this proposal'
  }
];

const proposalActionList = [
  {
    type: 'string',
    key: 'title',
    description: 'The title that describes the action'
  },
  {
    type: 'bytes',
    key: 'target',
    description: 'The address to send the calldata to'
  },
  {
    type: 'string',
    key: 'value',
    description: 'The value of BNB to send with the transaction'
  },
  {
    type: 'string',
    key: 'signature',
    description:
      'The function signature of the function to call at the target address'
  },
  {
    type: 'string',
    key: 'data',
    description: 'The encoded argument data for the action'
  }
];

const proposalStateList = [
  {
    type: 'string',
    key: 'state',
    description:
      'The state objects type, (e.g.: pending, active, canceled, defeated, succeeded, queued, expired, executed)'
  },
  {
    type: 'uint32',
    key: 'start_time',
    description: 'The start timestamp of state'
  },
  {
    type: 'uint32',
    key: 'end_time',
    description:
      'Either null or the definitive end timestamp or an estimated end timestamp of the state'
  },
  {
    type: 'string',
    key: 'trx_hash',
    description:
      'Either null or the transaction hash that represents the state transition'
  }
];

function GovernanceService() {
  const headFormula = `
  // Retreives a list of governance proposals
  fetch("https://api.venus.io/api/governance/proposals");
  
  // Retreives a list of governance proposal vote receipts
  fetch("https://api.venus.io/api/governance/proposal_vote_receipts");
  
  // Retreives a list of XVS accounts
  fetch("https://api.venus.io/api/governance/accounts");
  `;

  return (
    <GovernanceServiceWrapper id="api-governanceservice">
      <Label title marginBottom>
        GovernanceService
      </Label>
      <Description>
        Note: This service is experimental (alpha) and subject to change.
      </Description>
      <Description>
        The Governance Service includes three endpoints to retrieve information
        about XVS accounts, governance proposals, and proposal vote receipts.
        You can use the APIs below to pull data about the Venus governance
        system:
      </Description>
      <HighLighter>{headFormula}</HighLighter>
      <div className="api-section">
        <div className="name">GET:</div>
        <div className="desc">/governance/proposals</div>
      </div>
      <SubSection>
        <Label marginBottom>ProposalRequest</Label>
        <Description>
          The request to the Proposal API can specify a number of filters, such
          as which ids to retrieve information about or state of proposals.
        </Description>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {requestList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>ProposalResponse</Label>
        <Description>
          The Proposal API returns a list of proposals that match the given
          filters on the request in descending order by proposal_id.
        </Description>
        <div className="table-section">
          <div className="list-section">
            <div className="type header response">Type</div>
            <div className="key header response">Key</div>
            <div className="desc header response">Description</div>
          </div>
          {responseList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type response">{item.type}</div>
              <div className="key response">{item.key}</div>
              <div className="desc response">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>DisplayXvsAccount</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {accountList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>Proposal</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header response">Type</div>
            <div className="key header response">Key</div>
            <div className="desc header response">Description</div>
          </div>
          {proposalList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type response">{item.type}</div>
              <div className="key response">{item.key}</div>
              <div className="desc response">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>ProposalAction</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {proposalActionList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>ProposalState</Label>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {proposalStateList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </GovernanceServiceWrapper>
  );
}

export default GovernanceService;
