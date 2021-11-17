import React from "react";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Sobre } from '../../components/Sobre'

export function Home() {
  return (
    <>
      <Header />
      <Products />
      <Sobre />
      <Footer />
    </>
  );
}
