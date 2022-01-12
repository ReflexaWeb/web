import React from "react";
import { BsFillPinMapFill } from "react-icons/bs";

import aboutImg from '../../assets/images/areflexa.png'

import { Section, Container, About, Title, Text, Endereco, AboutImg } from './styles'

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
              Focando sempre em trabalhar com qualidade, praticidade e seriedade, a Reflexa vem fidelizando clientes a mais de 24 anos.</Text>

              <Endereco>
              <p><span>Endereço:</span> R. José Casagrande, 42 - Vista Alegre, Curitiba - PR</p>
              <a href="https://www.google.com/maps/place/Reflexa+Embalagens/@-25.4151012,-49.3010911,15z/data=!4m5!3m4!1s0x0:0x9eae8d4d6df6e7c8!8m2!3d-25.4151013!4d-49.3010913">
                <BsFillPinMapFill /> Como chegar
              </a>
            </Endereco>
          </About>
          <AboutImg>
            <img src={aboutImg} alt="A Reflexa" />
          </AboutImg>
        </Container>
      </Section>
    </>
  );
}