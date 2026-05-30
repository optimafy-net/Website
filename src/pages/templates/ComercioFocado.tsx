import React from 'react';
import styled from 'styled-components';
import { ShoppingCart, Search, Filter, Star, Heart, Eye, ArrowRight, Package, Truck, Shield, Headphones, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const TopBar = styled.div`
  background: #0f172a;
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 500;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 100;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    background: #f1f5f9;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    width: 300px;
  }
`;

const Hero = styled.section`
  padding: 4rem 1.5rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '1px solid #e2e8f0'};
  background: ${props => props.primary ? '#2563eb' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#0f172a'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  position: relative;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border-color: #2563eb;
  }
`;

const ProductImage = styled.div`
  aspect-ratio: 1;
  background: #f8fafc;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
`;

const ProductName = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  color: #0f172a;
`;

const AddToCart = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: #f1f5f9;
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background: #2563eb;
    color: #fff;
  }
`;

const FeaturesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
`;

const ComercioFocado: React.FC = () => {
  return (
    <Container>
      <TopBar>FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 299</TopBar>
      <Nav>
        <Logo><Package size={24} /> TechStore</Logo>
        <SearchBar>
          <Search size={18} color="#94a3b8" />
          <input type="text" placeholder="O que você procura?" style={{ background: 'none', border: 'none', marginLeft: '0.5rem', outline: 'none', width: '100%' }} />
        </SearchBar>
        <NavActions>
          <Link to="/vitrine" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.875rem' }}>Vitrine</Link>
          <div style={{ position: 'relative' }}>
            <ShoppingCart size={22} />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#2563eb', color: '#fff', fontSize: '10px', padding: '2px 5px', borderRadius: '10px' }}>0</span>
          </div>
        </NavActions>
      </Nav>

      <Hero>
        <HeroContent>
          <div>
            <Title>Tecnologia de ponta para o seu dia a dia.</Title>
            <Subtitle>As melhores marcas com garantia oficial e entrega expressa para todo o Brasil.</Subtitle>
            <Button primary>Ver Ofertas <ArrowRight size={18} /></Button>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: '2rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Package size={100} color="#e2e8f0" />
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionHeader>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Mais Vendidos</h2>
          <Link to="#" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>Ver todos</Link>
        </SectionHeader>
        <ProductGrid>
          {[
            { name: 'Smartphone Pro Max 256GB', price: 'R$ 5.499' },
            { name: 'Fone de Ouvido Noise Cancelling', price: 'R$ 1.299' },
            { name: 'Smartwatch Series 9', price: 'R$ 2.899' },
            { name: 'Notebook Ultra Slim 16GB', price: 'R$ 4.299' }
          ].map((p, i) => (
            <ProductCard key={i}>
              <Heart size={18} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#cbd5e1', cursor: 'pointer' }} />
              <ProductImage><Package size={40} /></ProductImage>
              <ProductName>{p.name}</ProductName>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <ProductPrice>{p.price}</ProductPrice>
              <AddToCart><ShoppingCart size={16} /> Adicionar</AddToCart>
            </ProductCard>
          ))}
        </ProductGrid>

        <FeaturesRow>
          <FeatureItem><Truck size={20} color="#2563eb" /> Entrega Expressa</FeatureItem>
          <FeatureItem><Shield size={20} color="#2563eb" /> Pagamento Seguro</FeatureItem>
          <FeatureItem><Headphones size={20} color="#2563eb" /> Suporte 24/7</FeatureItem>
          <FeatureItem><Package size={20} color="#2563eb" /> Devolução Grátis</FeatureItem>
        </FeaturesRow>
      </Section>

      <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Logo style={{ justifyContent: 'center', marginBottom: '1.5rem' }}><Package size={24} /> TechStore</Logo>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>&copy; 2026 TechStore. Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  );
};

export default ComercioFocado;
