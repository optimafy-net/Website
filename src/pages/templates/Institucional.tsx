import React from 'react';
import styled from 'styled-components';
import { Globe, ArrowRight, CheckCircle2, Users, Award, Briefcase, Zap, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
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
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid #f1f5f9;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #1e3a8a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #1e3a8a; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1e3a8a;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  color: #475569;
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '2px solid #1e3a8a'};
  background: ${props => props.primary ? '#1e3a8a' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#1e3a8a'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(30, 58, 138, 0.1);
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
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background: #eff6ff;
  color: #1e3a8a;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
`;

const StatsRow = styled.div`
  background: #1e3a8a;
  color: #fff;
  padding: 6rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  h4 { font-size: 3rem; font-weight: 900; margin-bottom: 0.5rem; }
  p { font-size: 0.875rem; color: #bfdbfe; font-weight: 600; text-transform: uppercase; }
`;

const Footer = styled.footer`
  padding: 6rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
`;

const Institucional: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Globe size={24} /> CorpGlobal</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Title>Inovação que molda<br />o futuro corporativo.</Title>
        <Subtitle>
          Somos uma organização líder em soluções globais, dedicada a transformar desafios complexos em oportunidades sustentáveis de crescimento.
        </Subtitle>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button primary>Conheça Nossa História</Button>
          <Button>Relatório Anual</Button>
        </div>
      </Hero>

      <Section>
        <Grid>
          <FeatureCard>
            <IconWrapper><Zap size={28} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Visão Ágil</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Antecipamos tendências de mercado para manter sua empresa sempre um passo à frente da concorrência.</p>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper><Award size={28} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Excelência</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Compromisso inegociável com os mais altos padrões de qualidade e governança corporativa.</p>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper><Users size={28} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Foco no Cliente</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Construímos parcerias de longo prazo baseadas em confiança, transparência e resultados compartilhados.</p>
          </FeatureCard>
        </Grid>
      </Section>

      <StatsRow>
        <StatItem><h4>25+</h4><p>Anos de experiência</p></StatItem>
        <StatItem><h4>500+</h4><p>Clientes globais</p></StatItem>
        <StatItem><h4>12</h4><p>Escritórios mundiais</p></StatItem>
        <StatItem><h4>100%</h4><p>Satisfação</p></StatItem>
      </StatsRow>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Pronto para o próximo nível?</h2>
            <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '3rem' }}>Conecte sua empresa à rede de soluções mais eficiente do mercado global.</p>
            <Button primary>Entre em Contato <ChevronRight size={18} /></Button>
          </div>
        </div>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <Logo style={{ marginBottom: '1.5rem' }}><Globe size={24} /> CorpGlobal</Logo>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.9rem' }}>Liderando a transformação empresarial através de inovação tecnológica e excelência operacional desde 2001.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Institucional</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: '2' }}>
              <li>Quem Somos</li>
              <li>Nossos Serviços</li>
              <li>Sustentabilidade</li>
              <li>Investidores</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Contato</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: '2' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /> contact@corpglobal.com</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /> +1 (555) 123-4567</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /> Financial District, NY</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#94a3b8', fontSize: '0.75rem' }}>
          &copy; 2026 CorpGlobal Solutions. Todos os direitos reservados.
        </div>
      </Footer>
    </Container>
  );
};

export default Institucional;
