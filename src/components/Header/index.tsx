import React, { useState, FormEvent } from "react";

import { api } from "../../services/api";

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Topo, Form, Redes, Barra } from './styles'


interface Product {
  id: string;
  active: boolean;
  name: string;
  product_url: string;
  code: number;
}

export function Header() {
  const [newProd, setNewProd] = useState('');
  const [inputError, setInputError] = useState('');

  const [products, setProducts] = useState<Product[]>([]);

  async function handleSearchProd(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newProd) {
      setInputError('Digite o nome do produto que busca');
      return;
    }

    try {
      const response = await api.get<Product>(`products/?active=1&name=${newProd}`);
      console.log(response);
      const product = response.data;

      setProducts([...products, product]);
      setNewProd('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse produto');
    }
  }

  return (
    <>
      <Topo>
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
        <Form onSubmit={handleSearchProd}>
          <input
            value={newProd}
            onChange={(e) => setNewProd(e.target.value)}
            placeholder="digite sua busca, são mais de 8 mil produtos"
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
