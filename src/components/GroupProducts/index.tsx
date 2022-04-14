import React, { useEffect, useContext } from "react";

import Loading from '../../components/FullLoader';
import { Pagination } from "../Pagination";

import ApplicationContext from "../../context/application";

import { Section, Container, Title, Produtos } from "./styles";

//import imgDefault from '../../assets/images/no-photo.jpeg';

export function Products() {
  const { products, groups, group, fetchProducts, handleGroup, loadingProducts, page, totalPages, handlePage } = useContext(ApplicationContext);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Section>
      <Container>
        <Loading show={loadingProducts} />
        <Title>
          <h2>Catálogo de produtos</h2>
        </Title>
      </Container>
      <Container>
        <select
          onChange={(event) => handleGroup(event.target.value)}
          value={group}
        >
          <option value="">Filtre por Grupos</option>
          {groups.map(item => (
            <option
              key={item.id}
              value={item.code}
            >
              {item.name}
            </option>
          ))}
        </select>
      </Container>
      <Container>
        <Produtos>
          {products.map(product => (
            <div className="card">
              <img src={product.product_url} alt={product.name} />
              <p>
                {product.name}
              </p>
              <span><strong>Código:</strong> {product.code}</span>
              {product.unity &&<span><strong>{product.unity} </strong> {product.reference}
              </span>}
              {product.fraction_reference &&<span><strong>{product.fraction_reference} </strong> {product.unity_reference}
              </span>}
              <a href={
                `https://api.whatsapp.com/send?phone=5541996739627&text=Bem-vindo(a)%20a%20Reflexa%20Embalagens!
                Gostaria de orçar o produto:
                Código:${product.code}
                Nome: ${product.name}
                `
              } rel="noreferrer" target="_blank"> Orçar Produto</a>
              <span className="obs">* As especificações podem ser alteradas sem aviso prévio</span>
              <span className="obs">** Imagem meramente ilustrativa</span>
            </div>
          ))}
        </Produtos>
      </Container>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePage}
      />
    </Section>
  )
}