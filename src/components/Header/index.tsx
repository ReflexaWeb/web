import React from "react";

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'


import { Topo, Form, Redes, Barra } from './styles'

export function Header() {
  return (
    <>
      <Topo>
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
        <Form>
          <input placeholder="digite sua busca, são mais de 8 mil produtos" />
          <button>Buscar</button>
        </Form>
        <Redes>
          <img src={faceImg} alt="Facebbok" />
          <img src={instaImg} alt="Instagram" />
        </Redes>
      </Topo>
      <Barra></Barra>
    </>
  )
}
