import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { Problem } from '../components/sections/Problem';
import { Solution } from '../components/sections/Solution';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { AttentionMechanics } from '../components/layout/AttentionMechanics';
import styled from 'styled-components';
import { useAnalytics } from '../hooks/useAnalytics';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  useAnalytics();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Optimafy",
    "image": "https://optimafy/logo.png",
    "@id": "",
    "url": "https://optimafy",
    "telephone": "+5511999999999",
    "description": "Soluções em websites de alta performance e automação com inteligência artificial para empresas.",
    "serviceType": ["Desenvolvimento de Websites", "Automação com IA", "Integração de Processos Digitais"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000",
      "addressLocality": "São Paulo",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.561414,
      "longitude": -46.655881
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <Header />
      <Main>
        <Hero />
        <Problem />
        <Solution />
        <Testimonials />
        <Contact />
      </Main>
      <Footer />
      <AttentionMechanics />
    </>
  );
};

export default Home;
