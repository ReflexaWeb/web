import React from "react";
import { BsWhatsapp, BsFillPinMapFill } from "react-icons/bs";


import aboutImg from '../../assets/images/areflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Section, Container, About, Title, Subtitle, Redes, Text, Telefones, Endereco, AboutImg } from './styles'

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
              <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Bem-vindo(a)%20a%20Reflexa%20Embalagens!">
                <BsWhatsapp /> (41) 99673-9627
              </a>
            </Telefones>
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