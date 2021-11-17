import React from "react";

import aboutImg from '../../assets/images/areflexa.png'

import { Section, Container, About, Title, Text, AboutImg } from './styles'

export function Sobre() {
  return (
    <>
      <Section>
        <Container>
          <About>
            <Title>A Reflexa</Title>
            <Text> A Reflexa é referência no ramo de embalagens em Curitiba e região metropolitana. Estamos desde 1997 no mercado oferecendo produtos e atendimento de qualidade aos nossos clientes.
              Nossa ampla variedade de produtos nos permite atender diversos segmentos comerciais como panificadoras, confeitarias, restaurantes, mercados, açougues, lojas de conveniência, festas e domicílios residenciais.
              Com uma logística eficiente, proporcionamos aos clientes comodidade e praticidade em suas compras, com atendimento sugestivo, diversidade de produtos e entrega rápida.
              Além da loja física e atendimento por telefone, contamos com uma equipe de vendedores distribuídos pela cidade, que oferecem um acompanhamento pessoal nos estabelecimentos. Investimos constantemente nessa estrutura e estamos sempre de olho em lançamentos de novos produtos no mercado.
              Focando sempre em trabalhar com qualidade, praticidade e seriedade, a Reflexa vem fidelizando clientes a mais de 20 anos.</Text>
          </About>
          <AboutImg>
            <img src={aboutImg} alt="A Reflexa" />
          </AboutImg>
        </Container>
      </Section>
    </>
  );
}