import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Search, Zap, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

const SectionWrapper = styled.section`
  padding: 6rem 0;
  background-color: var(--bg-color);
  position: relative;
`;

const Headline = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SeparatorWrapper = styled.div`
  width: 100%;
  height: 2px;
  background: var(--border-color);
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const AnimatedSeparator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
`;

const MobileFixedCTA = styled(motion.div)`
  display: none;
  
  @media (max-width: 640px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg-color);
    padding: 1rem;
    box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
    z-index: 1000;
  }
`;

export const Problem: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const separatorX = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('problem');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Show when section is scrolled past top but not fully out
        setShowMobileCTA(rect.top < 0 && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: <Search size={32} />,
      title: "Presença Digital Fraca",
      description: "Sites lentos e sem estrutura técnica perdem tráfego e oportunidades."
    },
    {
      icon: <Zap size={32} />,
      title: "Processos Manuais Demais",
      description: "Equipes gastam tempo com tarefas repetitivas que poderiam ser automatizadas."
    },
    {
      icon: <Clock size={32} />,
      title: "Resposta Lenta ao Cliente",
      description: "Sem automação, o tempo de resposta aumenta e reduz drasticamente a conversão."
    }
  ];

  return (
    <SectionWrapper id="problem">
      <Container>
        <Headline>Empresas perdem crescimento por falta de estrutura web e automação</Headline>
        
        <Grid>
          {cards.map((card, index) => (
            <Card 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Grid>

        <SeparatorWrapper>
          <AnimatedSeparator style={{ x: separatorX }} />
        </SeparatorWrapper>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            variant="primary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="desktop-only"
          >
            Corrigir Gargalos <ArrowRight size={18} />
          </Button>
        </div>
      </Container>

      <MobileFixedCTA
        initial={{ y: 100 }}
        animate={{ y: showMobileCTA ? 0 : 100 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <Button 
          variant="primary" 
          fullWidth
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Corrigir Gargalos <ArrowRight size={18} />
        </Button>
      </MobileFixedCTA>
    </SectionWrapper>
  );
};
