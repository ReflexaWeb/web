import React from "react";
import { BsWhatsapp, BsPhone } from "react-icons/bs";


import aboutImg from '../../assets/images/areflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Section, Container, About, Title, Subtitle, Redes, Text, Telefones, AboutImg } from './styles'

export function AvisoLanding() {
  return (
    <>
      <Section>
        <Container>
          <About>
            <Title>Reflexa Embalagens</Title>
            <Subtitle>
              Estamos atualizando nosso <br /> Catálogo de Produtos para melhor atendê-los!
            </Subtitle>
            <Text>
              Para ver mais sobre nossos produtos siga-nos nas nossas redes sociais.
              Ou entre contato pelo telefone e o whatsapp.
            </Text>
            <Redes>
              <a href="https://pt-br.facebook.com/reflexaembalagens/">
                <img src={faceImg} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/reflexaembalagens/">
                <img src={instaImg} alt="Instagram" />
              </a>
            </Redes>
            <Telefones>
              <a href="tel:4130788880">
                <BsPhone /> (41) 3078-8880
              </a>
              <a href="https://api.whatsapp.com/send?phone=554199229316&text=Converse%20com%20a%20Reflexa%20Embalagens">
                <BsWhatsapp /> (41) 99673-9627
              </a>
            </Telefones>
          </About>
          <AboutImg>
            <img src={aboutImg} alt="A Reflexa" />
          </AboutImg>
        </Container>
      </Section>
    </>
  );
}