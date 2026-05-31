import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Container } from '../common/Container';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderBg = styled.div<{ $isScrolled: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--header-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(props) => (props.$isScrolled ? 'var(--border-color)' : 'transparent')};
  transition: border-color 0.3s ease, background-color 0.3s ease;
  z-index: -1;
`;

const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: relative;
  z-index: 10;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  z-index: 11;
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    max-width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: var(--header-bg);
    padding: 5rem 2rem;
    gap: 0.5rem;
    box-shadow: -10px 0 30px rgba(0,0,0,0.3);
    transform: translateX(${(props) => (props.$isOpen ? '0' : '100%')});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2000;
    overflow-y: auto;
    
    /* Improved interaction logic */
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    pointer-events: auto; /* Always auto when visible */
    
    /* Fix for blurriness/rendering artifacts */
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
  }
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${(props) => (props.$isActive ? '#ffd700' : '#ffffff')};
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    color: #ffd700;
    transform: translateY(-2px);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    width: 100%;
    text-align: center;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    a {
      padding: 1.25rem 0;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 11;
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
  position: relative;
  z-index: 2001;
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 1500;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.4s ease, visibility 0.4s ease;
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
  z-index: 10;
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

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    const isHomePage = location.pathname === '/';
    const isTargetHome = item.path === '/';

    // Prevent navigation and scroll if already on home section
    if (isHomePage && isTargetHome) {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (!isTargetHome) {
      // For non-home paths, let Link handle the navigation
      // but we explicitly call navigate to be sure it happens before state change if needed
      // Actually Link is better, but let's ensure setIsOpen(false) happens
    } else {
      // Navigating to home from another page
      if (item.id !== 'hero') {
        sessionStorage.setItem('scrollTarget', item.id);
      }
    }
    
    setIsOpen(false);
  };

  // Effect to handle scrolling after navigation to home
  useEffect(() => {
    if (location.pathname === '/') {
      const targetId = sessionStorage.getItem('scrollTarget');
      if (targetId) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Increased timeout to ensure DOM is ready
      }
    }
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      <HeaderBg $isScrolled={scrollPosition > 50} />
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      
      <NavList $isOpen={isOpen}>
        {menuItems.map((item) => (
          <NavItem 
            key={item.id} 
            $isActive={(item.path === location.pathname && (item.path !== '/' || activeId === item.id))}
          >
            <Link 
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </Link>
          </NavItem>
        ))}
      </NavList>

      <Nav>
        <Logo to="/" onClick={() => setIsOpen(false)}>Optimafy</Logo>
        
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
