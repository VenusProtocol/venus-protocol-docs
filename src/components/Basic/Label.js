import styled from 'styled-components';

const Label = styled.div`
  font-size: ${({ title }) => (title ? 2 : 1.4)}em;
  font-weight: 900;
  color: var(--color-text-main);
  margin-top: ${({ marginTop }) => (marginTop ? 40 : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? 40 : 0)}px;

  @media (max-width: 768px) {
    font-size: ${({ title }) => (title ? 20 : 16)}px;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? 20 : 0)}px;
    margin-top: ${({ marginTop }) => (marginTop ? 20 : 0)}px;
  }
`;

export default Label;
