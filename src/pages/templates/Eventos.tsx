import React from 'react';
import styled from 'styled-components';
import { PartyPopper, Calendar, MapPin, Clock, Ticket, Star, ArrowRight, Music, Mic2, Camera, Share2, Heart } from 'lucide-react';
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
  font-weight: 900;
  font-size: 1.5rem;
  color: #ec4899;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #ec4899; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://www.transparenttextures.com/patterns/cubes.png');
    opacity: 0.1;
  }
`;

const Badge = styled.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3.5rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1.25rem 2.5rem;
  border-radius: 100px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  border: ${props => props.primary ? 'none' : '2px solid #fff'};
  background: ${props => props.primary ? '#fff' : 'transparent'};
  color: ${props => props.primary ? '#ec4899' : '#fff'};
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;

  &:hover {
    transform: scale(1.05);
    background: #fff;
    color: #ec4899;
  }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 4rem;
  text-align: center;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EventCard = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eee;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px -12px rgba(0,0,0,0.1);
  }
`;

const EventImage = styled.div`
  height: 250px;
  background: #f8fafc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ddd;
`;

const DateBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #fff;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  span { display: block; }
  .day { font-size: 1.25rem; font-weight: 800; color: #ec4899; }
  .month { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #666; }
`;

const EventContent = styled.div`
  padding: 2.5rem;
`;

const EventType = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #ec4899;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  display: block;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Footer = styled.footer`
  padding: 6rem 1.5rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const Eventos: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><PartyPopper size={28} /> VibeEvents</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Os melhores eventos de 2026</Badge>
        <Title>Viva momentos<br />inesquecíveis.</Title>
        <Subtitle>
          A curadoria definitiva de shows, workshops e experiências imersivas na sua cidade. 
          Sinta a energia de estar presente.
        </Subtitle>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button primary>Ver Próximos Eventos</Button>
          <Button>Anunciar Meu Evento</Button>
        </div>
      </Hero>

      <Section>
        <SectionTitle>Em Destaque</SectionTitle>
        <EventGrid>
          <EventCard>
            <EventImage>
              <Music size={64} />
              <DateBadge>
                <span className="day">15</span>
                <span className="month">Mar</span>
              </DateBadge>
            </EventImage>
            <EventContent>
              <EventType>Festival</EventType>
              <EventTitle>Summer Vibes 2026</EventTitle>
              <EventMeta>
                <MetaItem><Clock size={16} /> 16h às 02h</MetaItem>
                <MetaItem><MapPin size={16} /> Arena Beach, São Paulo</MetaItem>
                <MetaItem><Ticket size={16} /> A partir de R$ 150</MetaItem>
              </EventMeta>
              <Button primary style={{ width: '100%', justifyContent: 'center' }}>Garantir Ingresso</Button>
            </EventContent>
          </EventCard>

          <EventCard>
            <EventImage>
              <Mic2 size={64} />
              <DateBadge>
                <span className="day">22</span>
                <span className="month">Mar</span>
              </DateBadge>
            </EventImage>
            <EventContent>
              <EventType>Workshop</EventType>
              <EventTitle>Masterclass de Produção</EventTitle>
              <EventMeta>
                <MetaItem><Clock size={16} /> 09h às 18h</MetaItem>
                <MetaItem><MapPin size={16} /> Centro Cultural Nexus</MetaItem>
                <MetaItem><Ticket size={16} /> Vagas Limitadas</MetaItem>
              </EventMeta>
              <Button primary style={{ width: '100%', justifyContent: 'center' }}>Inscrever-se</Button>
            </EventContent>
          </EventCard>
        </EventGrid>
      </Section>

      <Section style={{ textAlign: 'center', background: '#fdf2f8', borderRadius: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Não perca nenhuma novidade.</h2>
        <p style={{ color: '#666', marginBottom: '3rem' }}>Receba em primeira mão a agenda de eventos e descontos exclusivos.</p>
        <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
          <input type="email" placeholder="Seu melhor e-mail" style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '100px', border: '1px solid #ddd', outline: 'none' }} />
          <Button primary style={{ padding: '1rem 2rem' }}>Assinar</Button>
        </div>
      </Section>

      <Footer>
        <Logo style={{ color: '#fff', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <PartyPopper size={28} /> VibeEvents
        </Logo>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', color: '#888' }}>
          <Share2 size={24} />
          <Heart size={24} />
          <Star size={24} />
        </div>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>&copy; 2026 VibeEvents. Transformando eventos em memórias.</p>
      </Footer>
    </Container>
  );
};

export default Eventos;
