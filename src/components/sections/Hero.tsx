import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useRef } from 'react';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 70px; /* Header height */
  
  @media (min-width: 641px) {
    min-height: 80vh;
  }
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6);
  background-size: 400% 400%;
`;

const HeroContent = styled(Container)`
  text-align: center;
  z-index: 1;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 3.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  @media (min-width: 641px) {
    flex-direction: row;
    max-width: none;
  }
`;

const SocialProofBar = styled(motion.div)`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Metric = styled.div`
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  
  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const Counter: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <MetricValue ref={ref}>{prefix}{count}{suffix}</MetricValue>;
};

export const Hero: React.FC = () => {
  const headlineWords = [
    "Websites de Alta Performance",
    "Automação Inteligente com IA",
    "Escala com Eficiência Real"
  ];

  return (
    <HeroWrapper id="hero">
      <BackgroundAnimation
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <HeroContent>
        <Headline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {headlineWords.map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </Headline>
        
        <Subheadline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Construa presença digital e automatize processos com soluções web e IA para crescer com previsibilidade.
        </Subheadline>
        
        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar Diagnóstico Técnico
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Projetos
          </Button>
        </CTAContainer>
        
        <SocialProofBar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Metric>
            <Counter value={198} suffix="+" />
            <MetricLabel>projetos</MetricLabel>
          </Metric>
          <Metric>
            <Counter value={94} suffix="%" />
            <MetricLabel>eficiência</MetricLabel>
          </Metric>
          <Metric>
            <Counter value={46} prefix="R$" suffix="M" />
            <MetricLabel>receita rastreada</MetricLabel>
          </Metric>
          <Metric>
            <Counter value={10} prefix="<" suffix="s" />
            <MetricLabel>resposta automatizada</MetricLabel>
          </Metric>
        </SocialProofBar>
      </HeroContent>
    </HeroWrapper>
  );
};
