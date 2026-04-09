import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Container } from '../common/Container';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--header-bg);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(props) => (props.$isScrolled ? 'var(--border-color)' : 'transparent')};
  transition: border-color 0.3s ease, background-color 0.3s ease;
`;

const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: var(--header-bg);
    padding: 2rem;
    gap: 2rem;
    box-shadow: -10px 0 30px rgba(0,0,0,0.3);
    transform: translateX(${(props) => (props.$isOpen ? '0' : '100%')});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1001;
  }
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${(props) => (props.$isActive ? '#ffd700' : '#ffffff')};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    height: 2px;
    background-color: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1002;
`;

const MobileToggle = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 1024px) {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 1000;
  }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: #ffd700;
  width: ${(props) => props.$progress}%;
  transition: width 0.1s ease-out;
`;

const menuItems = [
  { id: 'hero', label: 'Home', path: '/' },
  { id: 'web', label: 'Websites', path: '/web' },
  { id: 'automacao', label: 'Automação', path: '/automacao' },
  { id: 'vitrine', label: 'Vitrine', path: '/vitrine' },
  { id: 'testimonials', label: 'Depoimentos', path: '/' },
  { id: 'contact', label: 'Contato', path: '/' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const activeId = useScrollSpy(menuItems.filter(i => i.path === '/').map(item => item.id));
  const { theme, toggleTheme } = useTheme();
  
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.path !== location.pathname) {
      navigate(item.path);
      // If navigating to home, we might want to scroll to the section after navigation
      if (item.path === '/' && item.id !== 'hero') {
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (item.path === '/') {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <HeaderWrapper $isScrolled={scrollPosition > 50}>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Nav>
        <Logo to="/">Optimafy</Logo>
        
        <NavList $isOpen={isOpen}>
          {menuItems.map((item) => (
            <NavItem 
              key={item.id} 
              $isActive={(item.path === location.pathname && (item.path !== '/' || activeId === item.id))}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </NavItem>
          ))}
        </NavList>

        <Controls>
          <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ color: '#ffffff', padding: '8px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <MobileToggle onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileToggle>
        </Controls>

        <ProgressBar $progress={scrollProgress} />
      </Nav>
    </HeaderWrapper>
  );
};
