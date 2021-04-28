import React from 'react';
import styled from 'styled-components';
import Label from 'components/Basic/Label';
import Description from 'components/Basic/Description';
import HighLighter from 'components/Basic/HighLighter';

const CalculateAPYWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

function CalculateAPY() {
  const formula1 =
    'Rate = vToken.supplyRatePerBlock(); // Integer\nRate = 37893566\nBNB Mantissa = 1 * 10 ^ 18 (BNB has 18 decimal places)\nBlocks Per Day = 20 * 60 * 24 (based on 20 blocks occurring every minute)\nDays Per Year = 365\n\nAPY = ((((Rate / BNB Mantissa * Blocks Per Day + 1) ^ Days Per Year - 1)) - 1) * 100';
  // eslint-disable-next-line no-template-curly-in-string
  const formula2 = 'const ethMantissa = 1e18;\nconst blocksPerDay = 20 * 60 * 24;\nconst daysPerYear = 365;\n\nconst vToken = new web3.eth.Contract(vBnbAbi, vBnbAddress);\nconst supplyRatePerBlock = await vToken.methods.supplyRatePerBlock().call();\nconst borrowRatePerBlock = await vToken.methods.borrowRatePerBlock().call();\nconst supplyApy = (((Math.pow((supplyRatePerBlock / bnbMantissa * blocksPerDay) + 1,\nconst borrowApy = (((Math.pow((borrowRatePerBlock / bnbMantissa * blocksPerDay) + 1,\nconsole.log(`Supply APY for BNB ${supplyApy} %`);\nconsole.log(`Borrow APY for BNB ${borrowApy} %`);';

  return (
    <CalculateAPYWrapper>
      <Label title marginBottom>
        Calculating the APY Using Rate Per Block
      </Label>
      <Description>
        The Annual Percentage Yield (APY) for supplying or borrowing in each
        market can be calculated using the value of supplyRatePerBlock (for
        supply APY) or borrowRatePerBlock (for borrow APY) in this formula:
      </Description>
      <HighLighter>{formula1}</HighLighter>
      <Description>
        Here is an example of calculating the supply and borrow APY with Web3.js JavaScript:
      </Description>
      <HighLighter>{formula2}</HighLighter>
    </CalculateAPYWrapper>
  );
}

export default CalculateAPY;
