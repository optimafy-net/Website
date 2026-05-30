import React from 'react';
import styled from 'styled-components';
import { Package, Truck, Shield, Globe, ArrowRight, CheckCircle, Search, Filter, Phone, Mail, Building2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1a202c;
  background-color: #fff;
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 100;
  border-bottom: 1px solid #edf2f7;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #2b6cb0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #718096;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #2b6cb0; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  background: #f7fafc;
  text-align: center;
`;

const Badge = styled.span`
  background: #ebf8ff;
  color: #2b6cb0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #2d3748;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  color: #718096;
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '2px solid #2b6cb0'};
  background: ${props => props.primary ? '#2b6cb0' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#2b6cb0'};
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${props => props.primary ? '#2c5282' : '#2b6cb0'};
    color: #fff;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.div`
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #edf2f7;
  transition: all 0.3s;
  &:hover {
    border-color: #2b6cb0;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
  }
`;

const IconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: #ebf8ff;
  color: #2b6cb0;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CTASection = styled.div`
  background: #2d3748;
  color: #fff;
  padding: 5rem 3rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
`;

const Footer = styled.footer`
  padding: 5rem 1.5rem;
  border-top: 1px solid #edf2f7;
  background: #fff;
`;

const Fornecedores: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Building2 size={24} /> B2B Connect</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Soluções Corporativas</Badge>
        <Title>Sua cadeia de suprimentos<br />em um novo patamar.</Title>
        <Subtitle>
          Conectamos grandes empresas aos melhores fornecedores do mercado com eficiência, transparência e tecnologia.
        </Subtitle>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button primary>Seja um Parceiro</Button>
          <Button>Área do Cliente</Button>
        </div>
      </Hero>

      <Section>
        <Grid>
          <BenefitCard>
            <IconBox><BarChart3 size={24} /></IconBox>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Gestão Inteligente</h3>
            <p style={{ color: '#718096', lineHeight: '1.6' }}>Controle total sobre seus pedidos, faturamento e prazos em uma única plataforma.</p>
          </BenefitCard>
          <BenefitCard>
            <IconBox><Truck size={24} /></IconBox>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Logística Reversa</h3>
            <p style={{ color: '#718096', lineHeight: '1.6' }}>Sistemas otimizados de coleta e devolução para manter sua operação sempre ativa.</p>
          </BenefitCard>
          <BenefitCard>
            <IconBox><Shield size={24} /></IconBox>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Compliance Total</h3>
            <p style={{ color: '#718096', lineHeight: '1.6' }}>Garantia de que todos os parceiros seguem as normas regulatórias e de qualidade.</p>
          </BenefitCard>
        </Grid>

        <CTASection>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Pronto para escalar seu faturamento?</h2>
          <p style={{ color: '#a0aec0', marginBottom: '3rem', maxWidth: '600px' }}>
            Junte-se a mais de 5.000 empresas que já transformaram seus processos de compras e suprimentos.
          </p>
          <Button primary style={{ background: '#fff', color: '#2d3748' }}>Solicitar Demonstração <ArrowRight size={18} /></Button>
        </CTASection>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <Logo style={{ marginBottom: '1.5rem' }}><Building2 size={24} /> B2B Connect</Logo>
            <p style={{ color: '#718096', fontSize: '0.875rem' }}>Líder em integração de cadeias produtivas e fornecimento B2B inteligente.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 700 }}>Suporte</h4>
            <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: '2' }}>Central de Ajuda<br />Documentação API<br />Status do Sistema</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 700 }}>Contato</h4>
            <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: '2' }}>0800 123 4567<br />comercial@b2bconnect.com</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#a0aec0', fontSize: '0.75rem' }}>
          &copy; 2026 B2B Connect. Inteligência em Suprimentos.
        </div>
      </Footer>
    </Container>
  );
};

export default Fornecedores;
