import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';

const SectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--bg-color);
  overflow: hidden;
`;

const Headline = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 1.125rem);
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`;

const CarouselTrack = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${(props) => (props.direction === 'left' ? scrollLeft : scrollRight)} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const PlaceholderCard = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: var(--surface-color);
  border-radius: 24px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;

const testimonials = [
  { id: 1, img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400' },
  { id: 2, img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400' },
  { id: 3, img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=400' },
  { id: 4, img: 'https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=400' },
  { id: 5, img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400' },
];

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <Headline>Nossos Parceiros e Resultados</Headline>
        <Subtitle>Empresas que evoluíram seus websites e automações com nossa expertise técnica.</Subtitle>
        
        <CarouselWrapper>
          {/* First Carousel - Scrolls Left */}
          <CarouselContainer>
            <CarouselTrack direction="left">
              {[...testimonials, ...testimonials].map((item, index) => (
                <PlaceholderCard key={`left-${index}`}>
                  <img src={item.img} alt={`Partner ${index}`} />
                </PlaceholderCard>
              ))}
            </CarouselTrack>
          </CarouselContainer>

          {/* Second Carousel - Scrolls Right */}
          <CarouselContainer>
            <CarouselTrack direction="right">
              {[...testimonials, ...testimonials].map((item, index) => (
                <PlaceholderCard key={`right-${index}`}>
                  <img src={item.img} alt={`Partner ${index}`} />
                </PlaceholderCard>
              ))}
            </CarouselTrack>
          </CarouselContainer>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};
