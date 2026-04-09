import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--surface-color);
  border-radius: inherit;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const BlurPlaceholder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(20px);
  transform: scale(1.1);
  z-index: 1;
`;

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load before it enters viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ImageContainer ref={imgRef} className={className}>
      <AnimatePresence>
        {!isLoaded && (
          <BlurPlaceholder
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url(${src})` }} // Simplified for demo, normally use a tiny low-res version
          />
        )}
      </AnimatePresence>
      
      {isInView && (
        <StyledImage
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
};
