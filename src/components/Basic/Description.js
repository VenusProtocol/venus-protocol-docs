import styled from 'styled-components';

const Description = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: var(--color-text-secondary);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Description;
