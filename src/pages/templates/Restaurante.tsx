import React from 'react';
import styled from 'styled-components';
import { UtensilsCrossed, Clock, MapPin, Phone, CalendarCheck, Star, ChevronRight, Award, Flame, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Playfair Display', serif;
  color: #2c2c2c;
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  z-index: 100;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a1a;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #888;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s;
  &:hover { color: #000; }
`;

const Hero = styled.section`
  padding: 10rem 1.5rem 6rem;
  text-align: center;
  background: #fdfbf7;
`;

const Badge = styled.span`
  background: #e9e0d2;
  color: #8b7355;
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  display: inline-block;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: #1a1a1a;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1.25rem 2.5rem;
  border-radius: 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Inter', sans-serif;
  border: ${props => props.primary ? 'none' : '1px solid #1a1a1a'};
  background: ${props => props.primary ? '#1a1a1a' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#1a1a1a'};
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &:hover {
    background: ${props => props.primary ? '#333' : '#1a1a1a'};
    color: #fff;
  }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

const MenuInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ItemDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
`;

const ItemPrice = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 2rem;
`;

const FeaturedRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeaturedCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: #fdfbf7;
  border-radius: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  color: #8b7355;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  padding: 5rem 1.5rem;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

const Restaurante: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><UtensilsCrossed size={24} /> L'Essence</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>Alta Gastronomia</Badge>
        <Title>Sabor que transcende<br />o paladar.</Title>
        <Subtitle>
          Uma jornada sensorial através de ingredientes orgânicos e técnicas contemporâneas. 
          Onde a tradição encontra a inovação.
        </Subtitle>
        <Button primary>Reservar Mesa <CalendarCheck size={20} /></Button>
      </Hero>

      <Section>
        <FeaturedRow>
          <FeaturedCard>
            <IconWrapper><Award size={32} /></IconWrapper>
            <h3 style={{ marginBottom: '1rem' }}>Cozinha Autoral</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', fontFamily: 'Inter' }}>Pratos exclusivos criados por nosso chef executivo.</p>
          </FeaturedCard>
          <FeaturedCard>
            <IconWrapper><Flame size={32} /></IconWrapper>
            <h3 style={{ marginBottom: '1rem' }}>Fogo de Chão</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', fontFamily: 'Inter' }}>Técnicas ancestrais de cocção lenta e defumação.</p>
          </FeaturedCard>
          <FeaturedCard>
            <IconWrapper><Leaf size={32} /></IconWrapper>
            <h3 style={{ marginBottom: '1rem' }}>Farm to Table</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', fontFamily: 'Inter' }}>Ingredientes frescos colhidos diariamente em nossa horta.</p>
          </FeaturedCard>
        </FeaturedRow>

        <SectionTitle>Destaques do Cardápio</SectionTitle>
        <MenuGrid>
          <div>
            <MenuItem>
              <MenuInfo>
                <ItemName>Polvo Grelhado</ItemName>
                <ItemDesc>Com batatas ao murro, páprica defumada e aioli de açafrão.</ItemDesc>
              </MenuInfo>
              <ItemPrice>R$ 115</ItemPrice>
            </MenuItem>
            <MenuItem style={{ marginTop: '2rem' }}>
              <MenuInfo>
                <ItemName>Risoto de Funghi</ItemName>
                <ItemDesc>Arroz arbório, mix de cogumelos silvestres e azeite de trufas brancas.</ItemDesc>
              </MenuInfo>
              <ItemPrice>R$ 89</ItemPrice>
            </MenuItem>
          </div>
          <div>
            <MenuItem>
              <MenuInfo>
                <ItemName>Filé Mignon ao Jus</ItemName>
                <ItemDesc>Corte nobre com redução de vinho tinto e purê de mandioquinha.</ItemDesc>
              </MenuInfo>
              <ItemPrice>R$ 98</ItemPrice>
            </MenuItem>
            <MenuItem style={{ marginTop: '2rem' }}>
              <MenuInfo>
                <ItemName>Salmão Cítrico</ItemName>
                <ItemDesc>Grelhado na crosta de gergelim com aspargos e molho de maracujá.</ItemDesc>
              </MenuInfo>
              <ItemPrice>R$ 92</ItemPrice>
            </MenuItem>
          </div>
        </MenuGrid>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Button>Ver Cardápio Completo</Button>
        </div>
      </Section>

      <Footer>
        <Logo style={{ color: '#fff', justifyContent: 'center', marginBottom: '2rem' }}>
          <UtensilsCrossed size={24} /> L'Essence
        </Logo>
        <p style={{ color: '#888', marginBottom: '1rem' }}>Av. Gastronômica, 500 — Jardim Europa, São Paulo</p>
        <p style={{ color: '#888' }}>(11) 3000-0000 | @lessence_restaurante</p>
        <div style={{ marginTop: '3rem', fontSize: '0.75rem', color: '#555' }}>
          &copy; 2026 L'Essence. Todos os direitos reservados.
        </div>
      </Footer>
    </Container>
  );
};

export default Restaurante;
