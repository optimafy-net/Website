import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYouWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  text-align: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 500px;
`;

const SuccessIcon = styled(motion.div)`
  color: #22c55e;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ThankYouWrapper>
      <Container>
        <Content
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SuccessIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
          >
            <CheckCircle size={80} />
          </SuccessIcon>
          <Title>Obrigado!</Title>
          <Description>
            Sua solicitação de diagnóstico estratégico foi recebida com sucesso. 
            Nossa equipe entrará em contato em até 24 horas úteis.
          </Description>
          <div style={{ marginTop: '2rem' }}>
            <Button variant="secondary" onClick={() => navigate('/')}>
              <ArrowLeft size={18} /> Voltar para Home
            </Button>
          </div>
        </Content>
      </Container>
    </ThankYouWrapper>
  );
};

export default ThankYou;
