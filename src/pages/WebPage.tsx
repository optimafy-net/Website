import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { ExternalLink, Layers, Smartphone, Search, Monitor, Code, Check } from 'lucide-react';

const PageWrapper = styled.main`
  padding-top: 100px;
  min-height: 100vh;
  background-color: var(--bg-color);
`;

const Section = styled.section`
  padding: 3rem 0;
  border-bottom: 1px solid var(--border-color);

  @media (min-width: 641px) {
    padding: 4rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--card-title-color);
  line-height: 1.1;
`;

const Description = styled.p`
  font-size: clamp(1rem, 4vw, 1.125rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  margin-bottom: 2rem;
  li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 600;
  }
`;

const PlaceholderImage = styled(motion.img)`
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border: 1px solid var(--border-color);
`;

const WebPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Container>
          <Section>
            <Grid>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Title>Websites High-Performance</Title>
                <Description>
                  Desenvolvemos ecossistemas digitais focados em conversão e velocidade. 
                  Não criamos apenas sites, criamos máquinas de vendas otimizadas para o seu negócio.
                </Description>
                <FeatureList>
                  <li><Smartphone size={20} color="var(--accent-color)" /> Mobile-First Design</li>
                  <li><Monitor size={20} color="var(--accent-color)" /> Ultra Fast Loading (Core Web Vitals)</li>
                  <li><Search size={20} color="var(--accent-color)" /> SEO Estrutural Avançado</li>
                  <li><Code size={20} color="var(--accent-color)" /> Código Limpo e Escalável</li>
                </FeatureList>
                <Button onClick={() => window.location.hash = 'contact'}>
                  Solicitar Orçamento <ExternalLink size={18} />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <PlaceholderImage 
                  src={`${import.meta.env.BASE_URL}images/img8.jpg`} 
                  alt="Web Development Placeholder" 
                  whileHover={{ y: -10 }}
                />
              </motion.div>
            </Grid>
          </Section>

          <Section>
            <Grid>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <PlaceholderImage 
                  src={`${import.meta.env.BASE_URL}gif/test_gif.gif`} 
                  alt="Web Process Placeholder" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Title>Metodologia Ágil</Title>
                <Description>
                  Nosso processo de desenvolvimento garante entrega rápida sem comprometer a qualidade. 
                  Utilizamos as tecnologias mais modernas do mercado (React, Vite, TypeScript) para garantir 
                  que seu projeto nasça preparado para o futuro.
                </Description>
                <FeatureList>
                  <li><Layers size={20} color="var(--accent-color)" /> Arquitetura Modular</li>
                  <li><Check size={20} color="#22c55e" /> Testes de Usabilidade</li>
                </FeatureList>
              </motion.div>
            </Grid>
          </Section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default WebPage;
