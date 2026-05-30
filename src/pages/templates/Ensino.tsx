import React from 'react';
import styled from 'styled-components';
import { GraduationCap, BookOpen, Users, Star, ArrowRight, Play, CheckCircle, Award, Clock, Globe } from 'lucide-react';
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
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid #e2e8f0;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #6366f1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  &:hover { color: #6366f1; }
`;

const Hero = styled.section`
  padding: 8rem 1.5rem 4rem;
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  text-align: center;
  @media (min-width: 768px) {
    padding: 10rem 1.5rem 6rem;
  }
`;

const Badge = styled.span`
  background: #fff;
  color: #6366f1;
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  display: inline-block;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1e293b;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  color: #475569;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border: ${props => props.primary ? 'none' : '2px solid #6366f1'};
  background: ${props => props.primary ? '#6366f1' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#6366f1'};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
    background: ${props => props.primary ? '#4f46e5' : '#6366f1'};
    color: #fff;
  }
`;

const Section = styled.section`
  padding: 5rem 1.5rem;
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

const CourseCard = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
    border-color: #6366f1;
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
`;

const CourseContent = styled.div`
  padding: 2rem;
`;

const CourseTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #6366f1;
  background: #f5f3ff;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
`;

const Footer = styled.footer`
  padding: 5rem 1.5rem;
  background: #1e293b;
  color: #fff;
`;

const Ensino: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo><GraduationCap size={28} /> EduNexus</Logo>
        <BackLink to="/vitrine">Voltar para Vitrine</BackLink>
      </Nav>

      <Hero>
        <Badge>O futuro começa aqui</Badge>
        <Title>Aprenda com os melhores,<br />no seu próprio ritmo.</Title>
        <Subtitle>
          Cursos práticos e imersivos focados nas habilidades mais requisitadas pelo mercado de trabalho global.
        </Subtitle>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button primary>Explorar Cursos</Button>
          <Button><Play size={18} /> Ver Demo</Button>
        </div>
      </Hero>

      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Cursos em Destaque</h2>
          <Link to="#" style={{ color: '#6366f1', fontWeight: 700, textDecoration: 'none' }}>Ver todos</Link>
        </div>
        <Grid>
          <CourseCard>
            <CourseImage><BookOpen size={48} /></CourseImage>
            <CourseContent>
              <CourseTag>Desenvolvimento</CourseTag>
              <CourseTitle>Fullstack Master Class</CourseTitle>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>Domine React, Node.js e bancos de dados modernos do zero ao avançado.</p>
              <CourseMeta>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> 40h</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} fill="#fbbf24" color="#fbbf24" /> 4.9</span>
              </CourseMeta>
            </CourseContent>
          </CourseCard>

          <CourseCard>
            <CourseImage><Award size={48} /></CourseImage>
            <CourseContent>
              <CourseTag>Design</CourseTag>
              <CourseTitle>UX/UI Design Pro</CourseTitle>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>Crie interfaces incríveis e experiências memoráveis focadas no usuário.</p>
              <CourseMeta>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> 25h</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} fill="#fbbf24" color="#fbbf24" /> 4.8</span>
              </CourseMeta>
            </CourseContent>
          </CourseCard>

          <CourseCard>
            <CourseImage><Users size={48} /></CourseImage>
            <CourseContent>
              <CourseTag>Negócios</CourseTag>
              <CourseTitle>Liderança Ágil</CourseTitle>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>Gestão de times de alta performance utilizando as melhores práticas do mercado.</p>
              <CourseMeta>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> 15h</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={14} fill="#fbbf24" color="#fbbf24" /> 4.7</span>
              </CourseMeta>
            </CourseContent>
          </CourseCard>
        </Grid>
      </Section>

      <Section style={{ background: '#f8fafc', borderRadius: '3rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Por que escolher a EduNexus?</h2>
          <Grid style={{ marginTop: '4rem' }}>
            <div>
              <div style={{ color: '#6366f1', marginBottom: '1.5rem' }}><Globe size={32} /></div>
              <h4 style={{ marginBottom: '1rem' }}>Comunidade Global</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Conecte-se com estudantes de mais de 50 países e troque experiências.</p>
            </div>
            <div>
              <div style={{ color: '#6366f1', marginBottom: '1.5rem' }}><CheckCircle size={32} /></div>
              <h4 style={{ marginBottom: '1rem' }}>Certificação Oficial</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Certificados reconhecidos pelas maiores empresas do setor tecnológico.</p>
            </div>
            <div>
              <div style={{ color: '#6366f1', marginBottom: '1.5rem' }}><Users size={32} /></div>
              <h4 style={{ marginBottom: '1rem' }}>Suporte 1-on-1</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Mentoria individual com especialistas para tirar todas as suas dúvidas.</p>
            </div>
          </Grid>
        </div>
      </Section>

      <Footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Logo style={{ color: '#fff' }}><GraduationCap size={28} /> EduNexus</Logo>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ color: '#94a3b8' }}>Sobre</span>
            <span style={{ color: '#94a3b8' }}>Cursos</span>
            <span style={{ color: '#94a3b8' }}>Blog</span>
            <span style={{ color: '#94a3b8' }}>Suporte</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>&copy; 2026 EduNexus. Todos os direitos reservados.</p>
        </div>
      </Footer>
    </Container>
  );
};

export default Ensino;
