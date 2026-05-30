import React from 'react';
import styled from 'styled-components';
import { Briefcase, TrendingUp, Shield, Target, Users, ArrowRight, CheckCircle2, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1e293b;
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid #f1f5f9;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0f172a;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  &:hover { color: #0f172a; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, #f8fafc 0%, #fff 100%);
`;

const Badge = styled.span`
  background: #e2e8f0;
  color: #475569;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '2px solid #0f172a'};
  background: ${props => props.primary ? '#0f172a' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#0f172a'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: ${props => props.primary ? '#1e293b' : '#0f172a'};
    color: #fff;
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

const ExpertiseCard = styled.div`
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    border-color: #0f172a;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  }
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: #0f172a;
  color: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CaseSection = styled.div`
  margin-top: 4rem;
  background: #0f172a;
  border-radius: 2rem;
  padding: 4rem 2rem;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 6rem;
  }
`;

const Stat = styled.div`
  margin-bottom: 2rem;
  h4 { font-size: 3rem; font-weight: 800; color: #38bdf8; margin-bottom: 0.5rem; }
  p { color: #94a3b8; font-weight: 500; }
`;

const Footer = styled.footer`
  padding: 6rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
`;

const Consultoria: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Briefcase size={22} /> Nexus Strategic</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Excelência em Gestão</Badge>
        <Title>Estratégia que impulsiona<br />resultados reais.</Title>
        <Subtitle>
          Consultoria especializada em transformação digital e eficiência operacional para empresas que buscam liderar seus mercados.
        </Subtitle>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button primary>Falar com Especialista</Button>
          <Button>Nossas Soluções</Button>
        </div>
      </Hero>

      <Section>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}>Áreas de Atuação</h2>
        <Grid>
          <ExpertiseCard>
            <IconWrapper><TrendingUp size={24} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Crescimento Escalonável</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Desenvolvemos modelos de negócio preparados para crescer de forma sustentável e rápida.</p>
          </ExpertiseCard>
          <ExpertiseCard>
            <IconWrapper><Target size={24} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Eficiência Operacional</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Otimização de processos e redução de custos através de metodologias ágeis e dados.</p>
          </ExpertiseCard>
          <ExpertiseCard>
            <IconWrapper><Shield size={24} /></IconWrapper>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Governança & Risco</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>Estruturação de processos decisórios e gestão de riscos corporativos avançada.</p>
          </ExpertiseCard>
        </Grid>

        <CaseSection>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Resultados que falam por si.</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', marginBottom: '3rem' }}>
              Nossa metodologia já transformou centenas de operações em diversos setores da economia.
            </p>
            <Button style={{ borderColor: '#fff', color: '#fff' }}>Ver Cases de Sucesso <ArrowRight size={18} /></Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <Stat><h4>+45%</h4><p>Eficiência média</p></Stat>
            <Stat><h4>200+</h4><p>Projetos entregues</p></Stat>
            <Stat><h4>R$ 2B+</h4><p>Em valor gerado</p></Stat>
            <Stat><h4>15+</h4><p>Anos de mercado</p></Stat>
          </div>
        </CaseSection>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <Logo style={{ marginBottom: '1.5rem' }}><Briefcase size={22} /> Nexus Strategic</Logo>
            <p style={{ color: '#64748b', maxWidth: '400px', lineHeight: '1.6' }}>
              Sua parceira estratégica na jornada para a excelência empresarial e liderança de mercado.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Siga-nos</h4>
              <p style={{ color: '#64748b' }}>LinkedIn<br />Instagram<br />Twitter</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Contato</h4>
              <p style={{ color: '#64748b' }}>contato@nexus.com<br />(11) 3000-0000</p>
            </div>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Consultoria;
