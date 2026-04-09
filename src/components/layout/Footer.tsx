import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/Container';
import { Instagram, Mail, ShieldCheck, Lock, Headphones, Linkedin } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 6rem 0 3rem;
  color: var(--text-secondary);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 641px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const FooterLink = styled.a`
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const SocialBtn = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 1rem;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  gap: 1.5rem;
  opacity: 0.6;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-color)' }}>
              Optimafy
            </div>
            <p>
              Arquitetura de performance e automação com IA para empresas de alto padrão.
              Eliminamos o gap de eficiência e escalamos resultados.
            </p>
            <SocialLinks>
              <SocialBtn href="#"><Instagram size={20} /></SocialBtn>
              <SocialBtn href="#"><Linkedin size={20} /></SocialBtn>
              <SocialBtn href="#"><Mail size={20} /></SocialBtn>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Serviços</FooterTitle>
            <FooterLink onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Inteligência Estratégica</FooterLink>
            <FooterLink onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Performance de Mídia</FooterLink>
            <FooterLink onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Automação com IA</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Empresa</FooterTitle>
            <FooterLink href="/sobre">Sobre Nós</FooterLink>
            <FooterLink href="/vitrine">Portfólio de Templates</FooterLink>
            <FooterLink href="/contato">Fale com um Especialista</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Suporte</FooterTitle>
            <FooterLink href="#">Política de Privacidade</FooterLink>
            <FooterLink href="#">Termos de Uso</FooterLink>
            <FooterLink href="#">GDPR Compliance</FooterLink>
          </FooterColumn>
        </FooterGrid>

        <BottomBar>
          <div>
            &copy; {new Date().getFullYear()} Optimafy. Todos os direitos reservados.
          </div>
          <TrustBadges>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Lock size={16} /> Encrypted</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><ShieldCheck size={16} /> GDPR</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Headphones size={16} /> 24/7 Support</div>
          </TrustBadges>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};
