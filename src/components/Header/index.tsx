import React, { useState, FormEvent, useContext } from "react";

import logoImg from '../../assets/images/logo-reflexa.png'
import faceImg from '../../assets/images/facebook.png'
import instaImg from '../../assets/images/instagram.png'

import { Topo, Form, Redes, Barra } from './styles'
import ApplicationContext from "../../context/application";

export function Header() {
  const { search, handleSearch } = useContext(ApplicationContext);
  const [inputSearch, handleInputSearch] = useState(search as string);
  //const [inputError, setInputError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    handleSearch(inputSearch);
  };

  return (
    <>
      <Topo>
      <a href="/">
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
      </a>
        <Form onSubmit={handleSubmit}>
          <input
            value={inputSearch}
            onChange={(e) => handleInputSearch(e.target.value)}
            placeholder="digite sua busca, são mais de 8 mil produtos"
          />
          <button type="submit">Buscar</button>
        </Form>

        <Redes>
        <a href="https://pt-br.facebook.com/reflexaembalagens/">
          <img src={faceImg} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/reflexaembalagens/">
          <img src={instaImg} alt="Instagram" />
        </a>
        </Redes>
      </Topo>
      <Barra />
    </>
  )
}
