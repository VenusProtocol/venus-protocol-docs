import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import { SubSection } from 'components/Basic/Section';

const SharedDataTypesWrapper = styled.div`
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

const paginationList = [
  {
    type: 'uint32',
    key: 'offset',
    description: 'The current page number'
  },
  {
    type: 'uint32',
    key: 'limit',
    description: 'The number of entries to show per page.'
  },
  {
    type: 'uint32',
    key: 'total',
    description: 'The number of items matching the request across all pages.'
  }
];

const preciseList = [
  {
    type: 'string',
    key: 'value',
    description: 'The full UNSIGNED number in string form. max value is 2^257 - 1,aka 231584178474632390847141970017375815706539969331281128078915168015826259279871'
  }
];

function SharedDataTypes() {
  return (
    <SharedDataTypesWrapper id="api-shared-data-types">
      <Label title marginBottom>
        Shared Data Types
      </Label>
      <Description>
        Custom data types that are shared between services.
      </Description>
      <SubSection>
        <Label marginBottom>Pagination Summary</Label>
        <Description>Used for paginating results.</Description>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {paginationList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection>
        <Label marginBottom>Precise</Label>
        <Description>For non-negative numbers only.</Description>
        <div className="table-section">
          <div className="list-section">
            <div className="type header">Type</div>
            <div className="key header">Key</div>
            <div className="desc header">Description</div>
          </div>
          {preciseList.map((item, index) => (
            <div className="list-section" key={index}>
              <div className="type">{item.type}</div>
              <div className="key">{item.key}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </SharedDataTypesWrapper>
  );
}

export default SharedDataTypes;
