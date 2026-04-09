import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from '../common/Container';
import { ChevronDown, Check, X, Brain, Target, Cpu } from 'lucide-react';

const SectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--surface-color);
  position: relative;
  overflow: hidden;
`;

const Headline = styled.h2`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 5rem;
  color: var(--text-primary);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.1;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  margin-bottom: 6rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 8rem;
  }
`;

const StepCardWrapper = styled(motion.div)`
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  position: relative;
  z-index: 2;
  height: fit-content;

  @media (min-width: 641px) {
    padding: 2.5rem;
  }
`;

const StepNumber = styled.span`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: var(--accent-color);
  opacity: 0.2;
  display: block;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StepList = styled.ul`
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background-color: var(--accent-color);
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
`;

const ExpanderHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  color: var(--accent-color);
  font-weight: 600;
  font-size: 0.9rem;
`;

const ExpanderContent = styled(motion.div)`
  overflow: hidden;
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding-top: 1rem;
  line-height: 1.6;
`;

const ConnectorLine = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 2px;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

const ComparisonSection = styled.div`
  margin-top: 8rem;
`;

const ComparisonTitle = styled.h3`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ComparisonCard = styled.div<{ $isOptimafy?: boolean }>`
  background-color: ${(props) => (props.$isOptimafy ? 'var(--bg-color)' : 'var(--surface-color)')};
  padding: 1.5rem;
  border-radius: 24px;
  border: 2px solid ${(props) => (props.$isOptimafy ? 'var(--accent-color)' : 'var(--border-color)')};
  position: relative;
  ${(props) => props.$isOptimafy && 'box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);'}

  @media (min-width: 641px) {
    padding: 3rem;
  }
`;

const CardLabel = styled.div<{ $isOptimafy?: boolean }>`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${(props) => (props.$isOptimafy ? 'var(--accent-color)' : 'var(--text-primary)')};
`;

const ComparisonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  color: var(--text-secondary);

  svg {
    flex-shrink: 0;
  }
`;

const FloatingProgress = styled(motion.div)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 100;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProgressDot = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? 'var(--accent-color)' : 'var(--border-color)')};
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border: 1px solid var(--accent-color);
    border-radius: 50%;
    opacity: ${(props) => (props.$active ? 1 : 0)};
    transform: scale(${(props) => (props.$active ? 1 : 0.5)});
    transition: all 0.3s ease;
  }
`;

const steps = [
  {
    number: '01',
    title: 'Website Estratégico',
    icon: <Brain size={24} />,
    bullets: ['Arquitetura orientada a conversão', 'SEO técnico e performance', 'UX focada em jornada do usuário'],
    specs: 'Estruturamos páginas e fluxos com base em dados para melhorar carregamento, indexação e conversão em todos os dispositivos.',
  },
  {
    number: '02',
    title: 'Automação de Processos',
    icon: <Target size={24} />,
    bullets: ['Fluxos automáticos de atendimento', 'Integração com CRM e canais', 'Qualificação inteligente de contatos'],
    specs: 'Conectamos formulários, mensagens e CRM para reduzir tarefas manuais, acelerar respostas e aumentar produtividade operacional.',
  },
  {
    number: '03',
    title: 'IA Aplicada',
    icon: <Cpu size={24} />,
    bullets: ['Assistentes com contexto real', 'Integração com WhatsApp API', 'Operação 24/7 com supervisão'],
    specs: 'Implementamos IA para atendimento e suporte com respostas contextualizadas, mantendo consistência, velocidade e rastreabilidade.',
  },
];

const StepCard = ({ step, index, active }: { step: typeof steps[0]; index: number; active: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <StepCardWrapper
      ref={ref}
      id={`step-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{ scale: active ? 1.05 : 1, transition: 'scale 0.3s ease' }}
    >
      <StepNumber>{step.number}</StepNumber>
      <StepTitle>
        {step.icon} {step.title}
      </StepTitle>
      <StepList>
        {step.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </StepList>
      
      <ExpanderHeader onClick={() => setIsOpen(!isOpen)}>
        Details 
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.div>
      </ExpanderHeader>
      
      <AnimatePresence>
        {isOpen && (
          <ExpanderContent
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {step.specs}
          </ExpanderContent>
        )}
      </AnimatePresence>
    </StepCardWrapper>
  );
};

export const Solution: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      steps.forEach((_, i) => {
        const el = document.getElementById(`step-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveStep(i);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionWrapper id="services">
      <Container>
        <Headline>Nossa arquitetura une website e automação para eliminar gargalos</Headline>
        
        <div style={{ position: 'relative' }}>
          <ConnectorLine>
            <svg width="100%" height="2" viewBox="0 0 1000 2" fill="none">
              <motion.path
                d="M0 1H1000"
                stroke="var(--accent-color)"
                strokeWidth="2"
                strokeDasharray="10 10"
                style={{ pathLength }}
              />
            </svg>
          </ConnectorLine>
          
          <StepsGrid>
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} active={activeStep === index} />
            ))}
          </StepsGrid>
        </div>

        <ComparisonSection>
          <ComparisonTitle>Operação Tradicional vs Operação Inteligente</ComparisonTitle>
          <ComparisonGrid>
            <ComparisonCard>
              <CardLabel>Traditional Agencies</CardLabel>
              <ComparisonItem><X size={18} color="#ef4444" /> Site sem estratégia técnica integrada</ComparisonItem>
              <ComparisonItem><X size={18} color="#ef4444" /> Processos manuais e resposta lenta</ComparisonItem>
              <ComparisonItem><X size={18} color="#ef4444" /> Baixa visibilidade de dados operacionais</ComparisonItem>
              <ComparisonItem><X size={18} color="#ef4444" /> Escala limitada pelo time</ComparisonItem>
            </ComparisonCard>
            
            <ComparisonCard $isOptimafy>
              <CardLabel $isOptimafy>Optimafy</CardLabel>
              <ComparisonItem><Check size={18} color="#22c55e" /> Website orientado a performance e conversão</ComparisonItem>
              <ComparisonItem><Check size={18} color="#22c55e" /> Automações com resposta em segundos</ComparisonItem>
              <ComparisonItem><Check size={18} color="#22c55e" /> Decisões baseadas em dados reais</ComparisonItem>
              <ComparisonItem><Check size={18} color="#22c55e" /> Estrutura pronta para escalar</ComparisonItem>
            </ComparisonCard>
          </ComparisonGrid>
        </ComparisonSection>
      </Container>

      <FloatingProgress>
        {steps.map((_, i) => (
          <ProgressDot key={i} $active={activeStep === i} />
        ))}
      </FloatingProgress>
    </SectionWrapper>
  );
};
