import React from 'react';
import styled from 'styled-components';
import { Building2, MapPin, Search, Filter, Home, Key, Camera, Phone, Mail, ArrowRight, Star, Heart, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 100;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #0ea5e9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #0ea5e9; }
`;

const Hero = styled.section`
  padding: 6rem 1.5rem;
  background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200') center/cover;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const SearchBox = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 900px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #1e293b;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    border-radius: 100px;
    padding: 0.75rem 0.75rem 0.75rem 2rem;
  }
`;

const SearchInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
  @media (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 0;
    border-right: 1px solid #e2e8f0;
  }
`;

const SearchButton = styled.button`
  background: #0ea5e9;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 768px) {
    border-radius: 100px;
  }
  &:hover { background: #0284c7; }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PropertyCard = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
  }
`;

const PropertyImage = styled.div`
  height: 240px;
  background: #f1f5f9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
`;

const PriceTag = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 800;
  color: #0ea5e9;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
`;

const PropertyContent = styled.div`
  padding: 1.5rem;
`;

const PropertyMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
`;

const Footer = styled.footer`
  padding: 6rem 1.5rem;
  background: #0f172a;
  color: #fff;
`;

const Imobiliaria: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><Building2 size={24} /> PrimeEstate</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Title>Encontre o lugar onde<br />sua vida acontece.</Title>
        <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>As melhores oportunidades em imóveis residenciais e comerciais.</p>
        <SearchBox>
          <SearchInput>
            <MapPin size={20} color="#64748b" />
            <input type="text" placeholder="Onde você quer morar?" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
          </SearchInput>
          <SearchInput>
            <Home size={20} color="#64748b" />
            <select style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', background: 'none' }}>
              <option>Tipo de Imóvel</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Terreno</option>
            </select>
          </SearchInput>
          <SearchButton><Search size={18} /> Buscar</SearchButton>
        </SearchBox>
      </Hero>

      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Imóveis em Destaque</h2>
          <Link to="#" style={{ color: '#0ea5e9', fontWeight: 700, textDecoration: 'none' }}>Ver todos</Link>
        </div>
        <PropertyGrid>
          {[
            { title: 'Villa das Palmeiras', location: 'Jardim América, SP', price: 'R$ 4.500.000', beds: 4, baths: 5, area: '450m²' },
            { title: 'Skyline Residence', location: 'Itaim Bibi, SP', price: 'R$ 2.800.000', beds: 3, baths: 3, area: '180m²' },
            { title: 'Green Valley House', location: 'Alphaville, SP', price: 'R$ 3.200.000', beds: 5, baths: 6, area: '600m²' }
          ].map((p, i) => (
            <PropertyCard key={i}>
              <PropertyImage>
                <Camera size={48} />
                <PriceTag>{p.price}</PriceTag>
                <Heart size={20} style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#fff', cursor: 'pointer' }} />
              </PropertyImage>
              <PropertyContent>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14} /> {p.location}</p>
                <PropertyMeta>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Key size={14} /> {p.beds} Quartos</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Maximize size={14} /> {p.area}</span>
                </PropertyMeta>
              </PropertyContent>
            </PropertyCard>
          ))}
        </PropertyGrid>
      </Section>

      <Section style={{ background: '#fff', borderRadius: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Quer vender seu imóvel?</h2>
        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 3rem' }}>Anuncie com quem entende do mercado e tenha seu imóvel visto por milhares de compradores qualificados todos os meses.</p>
        <SearchButton style={{ margin: '0 auto' }}>Anunciar Agora <ArrowRight size={18} /></SearchButton>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <Logo style={{ color: '#fff', marginBottom: '1.5rem' }}><Building2 size={24} /> PrimeEstate</Logo>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Transformando o mercado imobiliário com transparência e excelência no atendimento.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Contato</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}><Phone size={14} /> (11) 4004-0000<br /><Mail size={14} /> contato@primeestate.com</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Siga-nos</h4>
            <div style={{ display: 'flex', gap: '1rem', color: '#94a3b8' }}>
              <Star size={20} />
              <Heart size={20} />
              <Maximize size={20} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#475569', fontSize: '0.75rem' }}>
          &copy; 2026 PrimeEstate. CRECI J-12345.
        </div>
      </Footer>
    </Container>
  );
};

export default Imobiliaria;
