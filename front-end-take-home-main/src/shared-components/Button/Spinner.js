import React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';

export const Spinner = () => (
  <Flex alignItems="center" justifyContent="center" width="100%">
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </Flex>
);
const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 30px;
  height: 30px;

  & .path {
    stroke: ${props => props.theme.light};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
