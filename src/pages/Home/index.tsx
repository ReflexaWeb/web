import React from "react";
import { Helmet } from 'react-helmet';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Sobre } from '../../components/Sobre';


//import { AvisoLanding } from '../../components/AvisoLanding'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Reflexa Embalagens</title>
        <meta name="description" content="A Reflexa é referência no ramo de embalagens em Curitiba e região metropolitana. Estamos desde 1997 no mercado oferecendo produtos e atendimento de qualidade aos nossos clientes." />
      </Helmet>
      <Header/>
      <Products/>
      <Sobre />
      <Footer />
    </>
  );
}
