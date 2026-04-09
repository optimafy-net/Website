import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Bot, Zap, MessageSquare, Database, Terminal, Workflow, Check } from 'lucide-react';

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

const AutomacaoPage: React.FC = () => {
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
                <Title>Automação com IA Generativa</Title>
                <Description>
                  Elimine tarefas repetitivas e escale seu atendimento com nossa arquitetura de IA proprietária. 
                  Conectamos seu negócio ao futuro da produtividade.
                </Description>
                <FeatureList>
                  <li><Bot size={20} color="var(--accent-color)" /> Chatbots com RAG (Contexto Real)</li>
                  <li><MessageSquare size={20} color="var(--accent-color)" /> Integração Oficial WhatsApp API</li>
                  <li><Zap size={20} color="var(--accent-color)" /> Qualificação de Leads 24/7</li>
                  <li><Workflow size={20} color="var(--accent-color)" /> Workflows de CRM Automáticos</li>
                </FeatureList>
                <Button onClick={() => window.location.hash = 'contact'}>
                  Agendar Demonstração <Terminal size={18} />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <PlaceholderImage 
                  src={`${import.meta.env.BASE_URL}gif/test_gif.gif`} 
                  alt="AI Automation Placeholder" 
                  whileHover={{ scale: 1.02 }}
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
                  src={`${import.meta.env.BASE_URL}images/img8.jpg`} 
                  alt="Data Integration Placeholder" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Title>Integração de Dados</Title>
                <Description>
                  Nossa solução não é apenas um bot. É um sistema integrado que lê seus dados, 
                  aprende com seu histórico e executa ações diretas no seu banco de dados ou CRM.
                </Description>
                <FeatureList>
                  <li><Database size={20} color="var(--accent-color)" /> Sincronização em Tempo Real</li>
                  <li><Check size={20} color="#22c55e" /> Segurança de Dados End-to-End</li>
                </FeatureList>
              </motion.div>
            </Grid>
          </Section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default AutomacaoPage;
