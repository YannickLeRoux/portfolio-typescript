import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const expandOpen = keyframes`
  0% {
    transform: scale(1.8);
  }
  50% {
    transform: scale(0.95);
  }
  80% {
    transform: scale(1.05);
  }
  90% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
  `;

const StyledButton = styled.button`
  color: #ffffff;
  font-size: 1.2rem;
  background-color: #127ea5;
  background-image: url('https://www.transparenttextures.com/patterns/dark-denim-3.png');
  border-color: #00a7e8;
  border-radius: 0px;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 10px 30px;
  cursor: pointer;
  animation-name: ${expandOpen};
  -webkit-animation-name: expandOpen;
  animation-duration: 1.2s;
  -webkit-animation-duration: 1.2s;
  animation-timing-function: ease-out;
  -webkit-animation-timing-function: ease-out;
  visibility: visible !important;
  transition: all 0.8s, color 0.3s 0.3s;

  &:hover {
    background-color: #59c3c3;
    border-color: #99ddc8;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.4) inset;
    text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  }

  &:active {
    background-color: #127ea5;
    border-color: #00a7e8;
  }
`;

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
