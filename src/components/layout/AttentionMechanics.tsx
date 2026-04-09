import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Instagram, Mail, X } from 'lucide-react';

/* FAB Styles */
const FABWrapper = styled(motion.div)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const FABMain = styled(motion.button)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  border: none;
  cursor: pointer;
`;

const FABMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

const FABOption = styled(motion.a)`
  background-color: var(--bg-color);
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background-color: var(--surface-color);
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;

export const AttentionMechanics: React.FC = () => {
  const [fabOpen, setFabOpen] = useState(false);

  const socialLinks = [
    { 
      label: 'WhatsApp', 
      icon: <Phone size={18} />, 
      href: 'https://wa.me/yournumber',
      color: '#25D366'
    },
    { 
      label: 'Instagram', 
      icon: <Instagram size={18} />, 
      href: 'https://instagram.com/yourprofile',
      color: '#E4405F'
    },
    { 
      label: 'Email', 
      icon: <Mail size={18} />, 
      href: 'mailto:your@email.com',
      color: '#EA4335'
    },
  ];

  return (
    <>
      {/* FAB */}
      <FABWrapper
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <AnimatePresence>
          {fabOpen && (
            <FABMenu
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {socialLinks.map((link, index) => (
                <FABOption
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    x: 20,
                    scale: 0.8
                  } as any}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { delay: index * 0.05 }
                  } as any}
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                  {link.label}
                </FABOption>
              ))}
            </FABMenu>
          )}
        </AnimatePresence>

        <FABMain
          onClick={() => setFabOpen(!fabOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {fabOpen ? <X size="24" /> : <MessageSquare size="24" />}
        </FABMain>
      </FABWrapper>
    </>
  );
};
