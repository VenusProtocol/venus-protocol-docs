import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';

const ArchitectureWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function Architecture() {
  return (
    <ArchitectureWrapper id="unitroller-architecture">
      <Label title marginBottom>
        Architecture
      </Label>
      <Description>
        The Unitroller is implemented as an upgradeable proxy. The Unitroller
        proxies all logic to the Unitroller implementation, but storage values
        are set on the Unitroller. To call Unitroller functions, use the
        Unitroller ABI on the Unitroller address.
      </Description>
    </ArchitectureWrapper>
  );
}

export default Architecture;
