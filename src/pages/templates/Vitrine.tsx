import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Header } from '../../components/layout/Header';
import { Container } from '../../components/common/Container';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Cpu, Wrench, Briefcase, PartyPopper, 
  UtensilsCrossed, GraduationCap, Truck, Package, 
  Building2, Scissors, ArrowRight, Sparkles, Globe 
} from 'lucide-react';

const PageWrapper = styled.main`
  padding-top: 100px;
  min-height: 100vh;
  background-color: var(--bg-color);
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 8vw, 4rem);
  font-weight: 800;
  color: var(--card-title-color);
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding-bottom: 4rem;

  @media (min-width: 641px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
`;

const Card = styled(motion.div)`
  background-color: var(--surface-color);
  border-radius: 24px;
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 641px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: ${(props) => props.color}20;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--card-title-color);
`;

const CardDesc = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ViewLink = styled(Link)`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--accent-color);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    gap: 12px;
  }
`;

const vitrines = [
  {
    title: 'Supermercado',
    desc: 'Ofertas, categorias de produtos, delivery e programa de fidelidade.',
    icon: ShoppingCart,
    color: '#10b981',
    path: '/templates/supermercado'
  },
  {
    title: 'Comércio Focado',
    desc: 'Peças, eletrônicos e gráfica com catálogo e busca inteligente.',
    icon: Cpu,
    color: '#3b82f6',
    path: '/templates/comercio-focado'
  },
  {
    title: 'Serviço Individual',
    desc: 'Portfólio profissional, agendamento e depoimentos de clientes.',
    icon: Wrench,
    color: '#8b5cf6',
    path: '/templates/servico-individual'
  },
  {
    title: 'Consultoria',
    desc: 'Cases de sucesso, metodologias e captação de leads qualificados.',
    icon: Briefcase,
    color: '#4b5563',
    path: '/templates/consultoria'
  },
  {
    title: 'Eventos',
    desc: 'Calendário de eventos, galeria, inscrições e informações de local.',
    icon: PartyPopper,
    color: '#ec4899',
    path: '/templates/eventos'
  },
  {
    title: 'Restaurante',
    desc: 'Cardápio digital, reservas online, ambiente e horários.',
    icon: UtensilsCrossed,
    color: '#f59e0b',
    path: '/templates/restaurante'
  },
  {
    title: 'Ensino',
    desc: 'Cursos, matrícula online, grade curricular e depoimentos.',
    icon: GraduationCap,
    color: '#6366f1',
    path: '/templates/ensino'
  },
  {
    title: 'Logística',
    desc: 'Rastreamento de cargas, frota, cobertura e cotações.',
    icon: Truck,
    color: '#14b8a6',
    path: '/templates/logistica'
  },
  {
    title: 'Fornecedores',
    desc: 'Catálogo B2B, preços por volume, parcerias e pedidos.',
    icon: Package,
    color: '#f97316',
    path: '/templates/fornecedores'
  },
  {
    title: 'Imobiliária',
    desc: 'Listagem de imóveis, filtros avançados, tour virtual e contato.',
    icon: Building2,
    color: '#0ea5e9',
    path: '/templates/imobiliaria'
  },
  {
    title: 'Barbearia',
    desc: 'Agendamento, serviços, galeria de cortes e equipe.',
    icon: Scissors,
    color: '#44403c',
    path: '/templates/barbearia'
  },
  {
    title: 'Institucional',
    desc: 'Página corporativa com apresentação de serviços, equipe e portfólio.',
    icon: Globe,
    color: '#1e3a8a',
    path: '/templates/institucional'
  },
];

const Vitrine: React.FC = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <HeroSection>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '99px', backgroundColor: 'var(--accent-color)', color: 'white', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                <Sparkles size={16} />
                Portfólio de Templates
              </div>
              <Title>Nossa Vitrine Digital</Title>
              <Subtitle>
                Explore os templates que criamos para diferentes segmentos. Cada página foi 
                desenhada para maximizar conversões e encantar seus clientes.
              </Subtitle>
            </motion.div>
          </Container>
        </HeroSection>

        <Container>
          <Grid>
            {vitrines.map((v, index) => {
              const Icon = v.icon;
              return (
                <Card
                  key={v.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <IconWrapper color={v.color}>
                    <Icon size={28} />
                  </IconWrapper>
                  <CardTitle>{v.title}</CardTitle>
                  <CardDesc>{v.desc}</CardDesc>
                  <ViewLink to={v.path}>
                    Ver Template <ArrowRight size={18} />
                  </ViewLink>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Vitrine;