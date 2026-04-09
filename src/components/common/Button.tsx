import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  fullWidth?: boolean;
}

const StyledButton = styled(motion.button)<{ variant: 'primary' | 'secondary'; $fullWidth?: boolean }>`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  
  ${(props) =>
    props.variant === 'primary'
      ? `
    background-color: var(--accent-color);
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  `
      : `
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    &:hover {
      background-color: var(--surface-color);
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className,
  style,
  disabled,
  fullWidth
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      className={className}
      style={style}
      disabled={disabled}
      $fullWidth={fullWidth}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};
