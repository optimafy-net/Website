import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useToast } from '../Toast';
import { 
  CheckCircle2, 
  Lock, 
  Calendar as CalendarIcon, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Loader2,
  Clock,
  Phone,
  Mail,
  Building2,
  BarChart3
} from 'lucide-react';

const SectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: var(--surface-color);
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1.2fr;
  }
`;

/* Left Side - Value Prop */
const ValueProp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.1;
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BulletItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: var(--text-secondary);
  font-size: 1.1rem;
  
  svg {
    color: var(--accent-color);
    flex-shrink: 0;
    margin-top: 4px;
  }

  span {
    font-weight: 600;
    color: var(--text-primary);
    display: block;
    margin-bottom: 4px;
  }
`;

/* Right Side - Form */
const FormCard = styled(motion.div)`
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);

  @media (min-width: 641px) {
    padding: 2.5rem;
  }
`;

const FormStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background-color: var(--surface-color);
  color: var(--text-primary);
  font-size: 1rem;
  appearance: none;
`;

const StepIndicator = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
`;

const StepDot = styled.div<{ $active: boolean; $completed: boolean }>`
  height: 6px;
  flex: 1;
  border-radius: 3px;
  background-color: ${(props) => 
    props.$active ? 'var(--accent-color)' : 
    props.$completed ? 'var(--accent-color)' : 'var(--border-color)'};
  opacity: ${(props) => (props.$active ? 1 : props.$completed ? 0.6 : 0.3)};
  transition: all 0.3s;
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

/* Timeline */
const Timeline = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 641px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TimelineStep = styled.div`
  text-align: center;
  position: relative;
  
  &:not(:last-child)::after {
    @media (min-width: 641px) {
      content: '';
      position: absolute;
      top: 24px;
      right: -20%;
      width: 40%;
      height: 1px;
      border-top: 1px dashed var(--border-color);
    }
  }
`;

const TimeLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  margin-top: 8px;
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  spend: string;
  goals: string;
}

export const Contact: React.FC = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('contact_form_data');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      phone: '',
      company: '',
      spend: '',
      goals: '',
    };
  });

  useEffect(() => {
    localStorage.setItem('contact_form_data', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        type: 'success',
        title: 'Sucesso!',
        message: 'Seu diagnóstico foi recebido. Redirecionando para o calendário...',
      });
      setStep(3); // Move to calendar step
      localStorage.removeItem('contact_form_data');
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <Container>
        <Grid>
          <ValueProp>
            <Title>Pronto para escalar com website e automação inteligentes?</Title>
            <BulletList>
              <BulletItem>
                <CheckCircle2 size={24} />
                <div>
                  <span>Diagnóstico Técnico Gratuito</span>
                  Vamos analisar sua estrutura web atual e identificar gargalos de conversão e operação.
                </div>
              </BulletItem>
              <BulletItem>
                <CheckCircle2 size={24} />
                <div>
                  <span>Mapeamento de Jornada Digital</span>
                  Entenda como o usuário navega no seu site e onde a automação pode acelerar o atendimento.
                </div>
              </BulletItem>
              <BulletItem>
                <CheckCircle2 size={24} />
                <div>
                  <span>Projeção de Eficiência</span>
                  Receba um plano claro de ganhos com melhorias técnicas, integrações e fluxos automatizados.
                </div>
              </BulletItem>
            </BulletList>
          </ValueProp>

          <FormCard
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <StepIndicator>
              <StepDot $active={step === 1} $completed={step > 1} />
              <StepDot $active={step === 2} $completed={step > 2} />
              <StepDot $active={step === 3} $completed={step > 3} />
            </StepIndicator>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <FormStep
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <InputGroup>
                    <Label>Nome Completo</Label>
                    <Input 
                      name="name" 
                      placeholder="João da Silva" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>E-mail Profissional</Label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="joao@empresa.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Telefone</Label>
                    <Input 
                      name="phone" 
                      placeholder="+55 (11) 90000-0000" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Button onClick={handleNext}>
                    Continuar <ChevronRight size={18} />
                  </Button>
                </FormStep>
              )}

              {step === 2 && (
                <FormStep
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <InputGroup>
                    <Label>Nome da Empresa</Label>
                    <Input 
                      name="company" 
                      placeholder="Optimafy Tech" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Investimento Mensal em Tecnologia</Label>
                    <Select name="spend" value={formData.spend} onChange={handleChange}>
                      <option value="">Selecione uma faixa...</option>
                      <option value="0-5k">R$ 0 - R$ 5.000</option>
                      <option value="5k-20k">R$ 5.000 - R$ 20.000</option>
                      <option value="20k-50k">R$ 20.000 - R$ 50.000</option>
                      <option value="50k+">R$ 50.000+</option>
                    </Select>
                  </InputGroup>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="secondary" onClick={handleBack} style={{ flex: 1 }}>
                      Voltar
                    </Button>
                    <Button onClick={handleSubmit} style={{ flex: 2 }} disabled={loading}>
                      {loading ? <Loader2 className="animate-spin" /> : 'Quero Meu Diagnóstico'}
                    </Button>
                  </div>
                </FormStep>
              )}

              {step === 3 && (
                <FormStep
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center' }}
                >
                  <CalendarIcon size={48} color="var(--accent-color)" style={{ margin: '0 auto' }} />
                  <h3 style={{ fontWeight: 800, fontSize: '1.5rem' }}>Agende sua Reunião Estratégica</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Escolha um horário para a reunião de diagnóstico técnico com nossos especialistas.
                  </p>
                  <div style={{ 
                    height: '300px', 
                    backgroundColor: 'var(--surface-color)', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed var(--border-color)'
                  }}>
                    [Placeholder para integração do calendário]
                  </div>
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Reiniciar
                  </Button>
                </FormStep>
              )}
            </AnimatePresence>

            <SecurityBadge>
              <Lock size={14} />
              Suas informações são criptografadas e confidenciais
            </SecurityBadge>
          </FormCard>
        </Grid>

        <Timeline>
          <TimelineStep>
            <div style={{ backgroundColor: 'var(--bg-color)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid var(--border-color)' }}>
              <CheckCircle2 size={24} color="var(--accent-color)" />
            </div>
            <div style={{ fontWeight: 700, marginTop: '1rem' }}>Receba o Diagnóstico</div>
            <TimeLabel>Imediato</TimeLabel>
          </TimelineStep>
          <TimelineStep>
            <div style={{ backgroundColor: 'var(--bg-color)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid var(--border-color)' }}>
              <Phone size={24} color="var(--accent-color)" />
            </div>
            <div style={{ fontWeight: 700, marginTop: '1rem' }}>Reunião Técnica</div>
            <TimeLabel>24-48 Hours</TimeLabel>
          </TimelineStep>
          <TimelineStep>
            <div style={{ backgroundColor: 'var(--bg-color)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '1px solid var(--border-color)' }}>
              <ArrowRight size={24} color="var(--accent-color)" />
            </div>
            <div style={{ fontWeight: 700, marginTop: '1rem' }}>Proposta Personalizada</div>
            <TimeLabel>72 Hours</TimeLabel>
          </TimelineStep>
        </Timeline>
      </Container>
    </SectionWrapper>
  );
};
