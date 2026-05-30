import React from 'react';
import styled from 'styled-components';
import { ShoppingCart, Search, Filter, Star, Heart, ArrowRight, Package, Truck, Clock, Phone, MapPin, ChevronDown, Percent, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
  background-color: #f3f4f6;
  min-height: 100vh;
`;

const TopHeader = styled.div`
  background: #059669;
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 600;
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
  border-bottom: 1px solid #e5e7eb;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.5rem;
  color: #059669;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SearchBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    background: #f3f4f6;
    padding: 0.75rem 1.5rem;
    border-radius: 100px;
    width: 450px;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Hero = styled.section`
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 2rem;
  padding: 3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 300px;

  &::after {
    content: '';
    position: absolute;
    right: -50px;
    bottom: -50px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const CategoryCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
    color: #059669;
  }
`;

const Section = styled.section`
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 1.25rem;
  padding: 1rem;
  border: 1px solid transparent;
  transition: all 0.3s;
  position: relative;
  &:hover {
    border-color: #10b981;
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
  }
`;

const ProductImage = styled.div`
  aspect-ratio: 1;
  background: #f9fafb;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d5db;
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #ef4444;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #059669;
  margin-top: 0.5rem;
`;

const AddBtn = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: #059669;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover { background: #047857; }
`;

const Footer = styled.footer`
  padding: 4rem 1.5rem;
  background: #fff;
  border-top: 1px solid #e5e7eb;
`;

const Supermercado: React.FC = () => {
  return (
    <Container>
      <TopHeader>OFERTAS DA SEMANA: ATÉ 40% OFF EM HORTIFRUTI</TopHeader>
      <Nav>
        <Logo><ShoppingCart size={28} /> FreshMart</Logo>
        <SearchBar>
          <Search size={20} color="#9ca3af" />
          <input type="text" placeholder="Busque por produtos, marcas ou categorias..." style={{ background: 'none', border: 'none', marginLeft: '0.75rem', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
        </SearchBar>
        <NavActions>
          <Link to="/vitrine" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.875rem', fontWeight: 600 }}>Vitrine</Link>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingCart size={24} color="#1a1a1a" />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', fontWeight: 800 }}>0</span>
          </div>
        </NavActions>
      </Nav>

      <Hero>
        <Banner>
          <div style={{ maxWidth: '400px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              <Zap size={14} /> ENTREGA EM ATÉ 2 HORAS
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Sua feira completa sem sair de casa.</h1>
            <p style={{ opacity: 0.9, marginBottom: '2rem' }}>Produtos frescos selecionados com carinho e entrega rápida na sua porta.</p>
            <button style={{ padding: '1rem 2rem', borderRadius: '100px', border: 'none', background: '#fff', color: '#059669', fontWeight: 800, cursor: 'pointer' }}>Comprar Agora</button>
          </div>
        </Banner>

        <CategoriesGrid>
          {['Frutas', 'Legumes', 'Carnes', 'Padaria', 'Bebidas', 'Laticínios', 'Limpeza', 'Higiene'].map((cat, i) => (
            <CategoryCard key={i}>
              <div style={{ background: '#f3f4f6', height: '50px', borderRadius: '0.75rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Package size={24} color="#d1d5db" />
              </div>
              {cat}
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Hero>

      <Section>
        <SectionHeader>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Ofertas Imperdíveis</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontWeight: 700, cursor: 'pointer' }}>Ver mais <ArrowRight size={18} /></div>
        </SectionHeader>
        <ProductGrid>
          {[
            { name: 'Azeite Extra Virgem 500ml', price: 'R$ 32,90', off: '15% OFF' },
            { name: 'Café Gourmet Moído 250g', price: 'R$ 18,50', off: '20% OFF' },
            { name: 'Leite Integral 1L (Caixa)', price: 'R$ 4,89', off: null },
            { name: 'Arroz Tipo 1 - 5kg', price: 'R$ 24,90', off: '10% OFF' },
            { name: 'Detergente Líquido 500ml', price: 'R$ 2,45', off: null }
          ].map((p, i) => (
            <ProductCard key={i}>
              {p.off && <DiscountBadge>{p.off}</DiscountBadge>}
              <Heart size={18} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#d1d5db', cursor: 'pointer' }} />
              <ProductImage><Package size={40} /></ProductImage>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 700, height: '40px', overflow: 'hidden' }}>{p.name}</h3>
              <Price>{p.price}</Price>
              <AddBtn><ShoppingCart size={16} /> Adicionar</AddBtn>
            </ProductCard>
          ))}
        </ProductGrid>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <Logo style={{ marginBottom: '1.5rem' }}><ShoppingCart size={28} /> FreshMart</Logo>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>Sua melhor escolha para compras online de supermercado com qualidade e economia.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Institucional</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#6b7280', fontSize: '0.875rem', lineHeight: '2' }}>
              <li>Sobre o FreshMart</li>
              <li>Trabalhe Conosco</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Ajuda</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#6b7280', fontSize: '0.875rem', lineHeight: '2' }}>
              <li>Meus Pedidos</li>
              <li>Prazos de Entrega</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Siga-nos</h4>
            <div style={{ display: 'flex', gap: '1rem', color: '#6b7280' }}>
              <MapPin size={20} />
              <Phone size={20} />
              <Clock size={20} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem', borderTop: '1px solid #f3f4f6', paddingTop: '2rem', color: '#9ca3af', fontSize: '0.75rem' }}>
          &copy; 2026 FreshMart Supermercados. Todos os direitos reservados.
        </div>
      </Footer>
    </Container>
  );
};

export default Supermercado;
