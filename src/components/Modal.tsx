import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)<{ $size?: 'sm' | 'md' | 'lg' }>`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: ${props => props.$size === 'sm' ? '400px' : props.$size === 'lg' ? '800px' : '600px'};
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  
  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #111827;
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, size }) => (
  <AnimatePresence>
    {open && (
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          $size={size}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <CloseButton onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </CloseButton>
          {title && <ModalTitle>{title}</ModalTitle>}
          {children}
        </ModalContent>
      </Overlay>
    )}
  </AnimatePresence>
);

export default Modal;
