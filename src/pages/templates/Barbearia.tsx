import React from 'react';
import styled from 'styled-components';
import { Scissors, Clock, MapPin, Phone, Calendar, Star, ChevronRight, Check } from 'lucide-react';
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
  padding: 1.5rem;
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
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover { color: #000; }
`;

const Hero = styled.section`
  padding: 8rem 1.5rem 4rem;
  text-align: center;
  @media (min-width: 768px) {
    padding: 10rem 1.5rem 6rem;
  }
`;

const Badge = styled.span`
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  display: inline-block;
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
  color: #666;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '1px solid #ddd'};
  background: ${props => props.primary ? '#000' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#000'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 1rem;
  transition: border-color 0.2s;
  &:hover {
    border-color: #000;
  }
`;

const ServiceName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ServicePrice = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDetails = styled.div`
  color: #666;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Footer = styled.footer`
  padding: 4rem 1.5rem;
  background: #f9f9f9;
  border-top: 1px solid #eee;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Barbearia: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Scissors size={20} /> Barbearia</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Experiência Premium</Badge>
        <Title>Corte sua história,<br />defina seu estilo.</Title>
        <Subtitle>
          Ambiente minimalista, técnicas tradicionais e o cuidado que você merece.
          Agende seu horário em segundos.
        </Subtitle>
        <Button primary>Agendar Agora <Calendar size={18} /></Button>
      </Hero>

      <Section>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <Grid>
          <ServiceCard>
            <ServiceName>Corte Clássico</ServiceName>
            <ServicePrice>R$ 60</ServicePrice>
            <ServiceDetails>
              <DetailItem><Clock size={14} /> 45 min</DetailItem>
              <DetailItem><Check size={14} /> Lavagem inclusa</DetailItem>
              <DetailItem><Check size={14} /> Finalização com pomada</DetailItem>
            </ServiceDetails>
          </ServiceCard>
          <ServiceCard>
            <ServiceName>Barba Completa</ServiceName>
            <ServicePrice>R$ 45</ServicePrice>
            <ServiceDetails>
              <DetailItem><Clock size={14} /> 30 min</DetailItem>
              <DetailItem><Check size={14} /> Toalha quente</DetailItem>
              <DetailItem><Check size={14} /> Óleos essenciais</DetailItem>
            </ServiceDetails>
          </ServiceCard>
          <ServiceCard>
            <ServiceName>Combo Premium</ServiceName>
            <ServicePrice>R$ 95</ServicePrice>
            <ServiceDetails>
              <DetailItem><Clock size={14} /> 75 min</DetailItem>
              <DetailItem><Check size={14} /> Corte + Barba</DetailItem>
              <DetailItem><Check size={14} /> Cerveja cortesia</DetailItem>
            </ServiceDetails>
          </ServiceCard>
        </Grid>
      </Section>

      <Section style={{ background: '#000', color: '#fff' }}>
        <SectionTitle style={{ color: '#fff' }}>Onde Estamos</SectionTitle>
        <ContactGrid>
          <div>
            <MapPin size={24} style={{ marginBottom: '1rem' }} />
            <h3>Endereço</h3>
            <p style={{ color: '#aaa' }}>Av. Paulista, 1000<br />São Paulo, SP</p>
          </div>
          <div>
            <Clock size={24} style={{ marginBottom: '1rem' }} />
            <h3>Horários</h3>
            <p style={{ color: '#aaa' }}>Seg - Sex: 09h às 20h<br />Sáb: 09h às 18h</p>
          </div>
          <div>
            <Phone size={24} style={{ marginBottom: '1rem' }} />
            <h3>Contato</h3>
            <p style={{ color: '#aaa' }}>(11) 99999-9999<br />contato@barbearia.com</p>
          </div>
        </ContactGrid>
      </Section>

      <Footer>
        <p>&copy; 2026 Barbearia Premium. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default Barbearia;
