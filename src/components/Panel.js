import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Cursor from './Cursor';

// Updated GlobalStyle with modern font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    cursor: none; /* Hide the default cursor */
  }
`;

// Keyframes
const enhancedGlowPulse = keyframes`
  0% {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6),
                 0 0 30px rgba(255, 255, 255, 0.2),
                 0 0 60px rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8),
                 0 0 50px rgba(255, 255, 255, 0.5),
                 0 0 100px rgba(255, 255, 255, 0.3);
  }
`;

// Styled components
const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica Neue';
`;

const PanelDiv = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: rgba(40, 40, 40, 0.6);
  border-radius: 25px;
  padding: 30px 20px;
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.6),
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 30px rgba(255, 255, 255, 0.15);
  animation: ${enhancedGlowPulse} 6s infinite alternate;

  @media (max-width: 600px) {
    padding: 20px 15px;
  }
`;

const PanelInput = styled.input`
  width: 100%;
  padding: 30px;
  margin: 0 0 25px 0;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 20px; // Increased border radius for more curve
  font-size: 17px;
  font-weight: 550;
  color: #ffffff;
  outline: none;
  transition: all 0.1s ease;
  text-align: center;
  font-family: inherit;
  height: 60px; // Increased height
  cursor: none;
  user-select: none;
  &::placeholder {
    user-select: none;
  }

  &:focus {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 20px;
    height: 60px;
  }
`;

const PanelButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: rgba(40, 40, 40, 0);
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  outline: none;
  font-family: inherit;
  cursor: none;
  user-select: none;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: rgba(255, 255, 255, 0.7);
  }

  span {
    position: relative;
    z-index: 1;
    user-select: none;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 12px;
  }
`;

function Panel() {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <PanelContainer>
        <PanelDiv>
          <PanelInput type="text" placeholder="Address / Ticker" />
          <PanelInput type="text" placeholder="Amount" />
          <PanelButton>
            <span>Hide</span>
          </PanelButton>
        </PanelDiv>
      </PanelContainer>
    </>
  );
}

export default Panel;
