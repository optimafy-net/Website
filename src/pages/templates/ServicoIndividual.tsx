import React from 'react';
import styled from 'styled-components';
import { Wrench, Star, Clock, CheckCircle, ArrowRight, Shield, Heart, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
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
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8b5cf6;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #8b5cf6; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled.div`
  text-align: left;
`;

const Badge = styled.span`
  background: #f5f3ff;
  color: #8b5cf6;
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
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '2px solid #8b5cf6'};
  background: ${props => props.primary ? '#8b5cf6' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#8b5cf6'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.3);
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

const Card = styled.div`
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: #fbfbfe;
  border: 1px solid #f0f0f9;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    border-color: #8b5cf6;
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
  }
`;

const TestimonialSection = styled.div`
  background: #1a1a1a;
  color: #fff;
  padding: 6rem 1.5rem;
  border-radius: 3rem;
  margin: 4rem 1.5rem;
  text-align: center;
`;

const Footer = styled.footer`
  padding: 6rem 1.5rem;
  text-align: center;
  background: #fafafa;
  border-top: 1px solid #eee;
`;

const ServicoIndividual: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Wrench size={22} /> SoloPro</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <HeroContent>
          <Badge>Especialista Certificado</Badge>
          <Title>Soluções sob medida para você.</Title>
          <Subtitle>
            Ofereço serviços especializados com foco em qualidade técnica, prazos rigorosos e atendimento personalizado de ponta a ponta.
          </Subtitle>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button primary>Solicitar Orçamento</Button>
            <Button>Ver Portfólio</Button>
          </div>
        </HeroContent>
        <div style={{ background: '#f5f3ff', borderRadius: '2rem', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Wrench size={120} color="#ddd" />
        </div>
      </Hero>

      <Section>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '4rem', textAlign: 'center' }}>Por que me escolher?</h2>
        <Grid>
          <Card>
            <div style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Star size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Experiência</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Mais de 10 anos atuando no mercado com projetos de alta complexidade entregues com sucesso.</p>
          </Card>
          <Card>
            <div style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Clock size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Agilidade</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Processos otimizados para garantir a entrega no menor tempo possível sem comprometer a qualidade.</p>
          </Card>
          <Card>
            <div style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Shield size={32} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Garantia</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Suporte total pós-entrega e garantia de satisfação em todos os serviços realizados.</p>
          </Card>
        </Grid>
      </Section>

      <TestimonialSection>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Star size={40} color="#fbbf24" fill="#fbbf24" style={{ marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>"O melhor profissional com quem já trabalhei. Superou todas as expectativas."</h2>
          <p style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '1.25rem' }}>— Roberto Almeida, CEO Tech Solutions</p>
        </div>
      </TestimonialSection>

      <Section>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Vamos começar seu projeto?</h2>
          <p style={{ color: '#666', marginBottom: '3rem' }}>Estou pronto para transformar sua ideia em realidade.</p>
          <Button primary>Entrar em Contato Agora <ArrowRight size={18} /></Button>
        </div>
      </Section>

      <Footer>
        <Logo style={{ justifyContent: 'center', marginBottom: '2rem' }}><Wrench size={22} /> SoloPro</Logo>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', color: '#666' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> oi@solopro.com</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> (11) 98888-7777</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', color: '#8b5cf6' }}>
          <Instagram size={20} />
          <Linkedin size={20} />
          <Heart size={20} />
        </div>
        <p style={{ color: '#999', fontSize: '0.75rem' }}>&copy; 2026 SoloPro. Feito com paixão e precisão.</p>
      </Footer>
    </Container>
  );
};

export default ServicoIndividual;
