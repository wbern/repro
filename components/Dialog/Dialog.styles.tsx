import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  background: var(--color-quaternary-50);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  animation: ${slideIn} 0.25s ease-out forwards;
  z-index: 1;
`;
