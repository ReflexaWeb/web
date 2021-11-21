import React, { useState, FormEvent } from "react";

import { api } from "../../services/api";

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Topo, Form, Redes, Barra } from './styles'


interface Product {
  id: string;
  name: string;
  product_url: string;
  code: number;
}

export function Header() {
  const [newProd, setNewProd] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  async function handleSearchProd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //console.log(newProd)
    const response = await api.get(`products/${newProd}`);

    const product = response.data;

    setProducts([...products, product]);
    setNewProd('');
    //console.log(response.data);

  }

  return (
    <>
      <Topo>
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
        <Form onSubmit={handleSearchProd}>
          <input
            value={newProd}
            onChange={(e) => setNewProd(e.target.value)}
            placeholder="digite a busca pelo código do produto, são mais de 8 mil produtos"
          />
          <button type="submit">Buscar</button>
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
