import React from 'react';
import styled from 'styled-components';
import { Truck, MapPin, Search, Navigation, Package, Shield, Globe, ArrowRight, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #0f172a;
  background-color: #fff;
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #0284c7;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s;
  &:hover { color: #0f172a; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  text-align: center;
`;

const Badge = styled.span`
  background: rgba(14, 165, 233, 0.15);
  color: #38bdf8;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  display: inline-block;
  border: 1px solid rgba(14, 165, 233, 0.3);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  color: #94a3b8;
  font-size: 1.125rem;
  max-width: 650px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const TrackingBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  max-width: 800px;
  margin: -4rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #0f172a;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 100px;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  &::placeholder { color: #94a3b8; }
`;

const TrackingButton = styled.button`
  background: #0284c7;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    border-radius: 100px;
  }
  &:hover { background: #0369a1; }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 4rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
`;

const StatValue = styled.div`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0284c7;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  &:hover {
    border-color: #0284c7;
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
  }
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: #f0f9ff;
  color: #0284c7;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const Footer = styled.footer`
  padding: 5rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const Logistica: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Truck size={24} /> LogiChain</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Global Logistics Solutions</Badge>
        <Title>Logística Inteligente,<br />Conexão Global.</Title>
        <Subtitle>
          Otimizamos sua cadeia de suprimentos com tecnologia de ponta, 
          rastreamento em tempo real e eficiência operacional garantida.
        </Subtitle>
      </Hero>

      <TrackingBox>
        <Navigation size={20} color="#94a3b8" />
        <Input placeholder="Insira seu código de rastreamento..." />
        <TrackingButton>Rastrear Carga <Search size={18} /></TrackingButton>
      </TrackingBox>

      <Section>
        <StatsGrid>
          <StatCard>
            <StatValue>99.8%</StatValue>
            <StatLabel>Entregas no Prazo</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>150+</StatValue>
            <StatLabel>Países Atendidos</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>12k</StatValue>
            <StatLabel>Caminhões na Frota</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>24/7</StatValue>
            <StatLabel>Suporte Ativo</StatLabel>
          </StatCard>
        </StatsGrid>
      </Section>

      <Section style={{ background: '#f8fafc' }}>
        <SectionTitle>Nossas Soluções</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <IconWrapper><Package size={24} /></IconWrapper>
            <h3>Armazenagem</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '1rem' }}>
              Centros de distribuição estrategicamente localizados com controle rigoroso de estoque.
            </p>
          </ServiceCard>
          <ServiceCard>
            <IconWrapper><Globe size={24} /></IconWrapper>
            <h3>Frete Internacional</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '1rem' }}>
              Transporte multimodal conectando sua empresa aos principais mercados do mundo.
            </p>
          </ServiceCard>
          <ServiceCard>
            <IconWrapper><Shield size={24} /></IconWrapper>
            <h3>Seguro de Carga</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '1rem' }}>
              Proteção total para suas mercadorias contra qualquer imprevisto durante o trajeto.
            </p>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Footer>
        <FooterGrid>
          <div>
            <Logo style={{ marginBottom: '1.5rem' }}><Truck size={24} /> LogiChain</Logo>
            <p style={{ color: '#64748b', maxWidth: '300px' }}>
              Líder em soluções logísticas integradas, transformando desafios em oportunidades de crescimento.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', lineHeight: '2' }}>
              <li>Sobre Nós</li>
              <li>Nossa Frota</li>
              <li>Carreiras</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Contato</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', lineHeight: '2' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /> 0800 500 1000</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /> São Paulo, SP</li>
            </ul>
          </div>
        </FooterGrid>
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#94a3b8', fontSize: '0.875rem' }}>
          &copy; 2026 LogiChain. Tecnologia a serviço do transporte.
        </div>
      </Footer>
    </Container>
  );
};

export default Logistica;
