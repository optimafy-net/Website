import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import styled from 'styled-components';

const FloatingHome = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: var(--accent-color, #3b82f6);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #2563eb;
  }
`;

const BackToHome = () => (
  <FloatingHome to="/vitrine" title="Voltar para Vitrine">
    <Home size={20} />
  </FloatingHome>
);

export default BackToHome;
