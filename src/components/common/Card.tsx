import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const StyledCard = styled(motion.div)`
  background-color: var(--surface-color);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
  }
`;

const IconWrapper = styled.div`
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const LearnMore = styled(motion.div)`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <StyledCard
      initial="initial"
      whileHover="hover"
      animate="initial"
      variants={{
        hover: { y: -8 }
      }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      
      <LearnMore
        variants={{
          initial: { opacity: 0, x: -10 },
          hover: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.2 }}
      >
        Learn more <ArrowRight size={16} />
      </LearnMore>
    </StyledCard>
  );
};
