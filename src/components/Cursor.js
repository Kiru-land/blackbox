import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease-out;
`;

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = useCallback(() => setIsClicked(true), []);
  const handleMouseUp = useCallback(() => setIsClicked(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  return (
    <CursorWrapper style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      <CursorDot 
        style={{ 
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.5 : 1})`,
          opacity: isClicked ? 0.5 : 1
        }} 
      />
    </CursorWrapper>
  );
};

export default CustomCursor;
