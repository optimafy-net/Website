import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Skeleton = styled.div<{ width?: string; height?: string; radius?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  border-radius: ${(props) => props.radius || '4px'};
  background: linear-gradient(
    90deg,
    var(--surface-color) 25%,
    var(--border-color) 50%,
    var(--surface-color) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;
