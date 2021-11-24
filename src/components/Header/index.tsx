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
        <img src={logoImg} alt="Reflexa Comercial de Manufaturados" />
        <Form onSubmit={handleSubmit}>
          <input
            value={inputSearch}
            onChange={(e) => handleInputSearch(e.target.value)}
            placeholder="digite sua busca, são mais de 8 mil produtos"
          />
          <button type="submit">Buscar</button>
        </Form>

        <Redes>
          <img src={faceImg} alt="Facebook" />
          <img src={instaImg} alt="Instagram" />
        </Redes>
      </Topo>
      <Barra />
    </>
  )
}
