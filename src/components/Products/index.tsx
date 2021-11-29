import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import Loading from '../../components/FullLoader';
import { Pagination } from "../../components/Pagination";

import ApplicationContext from "../../context/application";

import { Section, Container, Title, Produtos } from "./styles";

export function Products() {
  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  const { products, groups, group, fetchProducts, handleGroup, loadingProducts } = useContext(ApplicationContext);

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
            <Link key={product.id} to={`/produto/${product.code}`}>
              <img src={product.product_url} alt={product.name} />
              <p>
                {product.name}
              </p>
              <span>Ver produto</span>
            </Link>
          ))}
        </Produtos>
      </Container>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePages}
      />
    </Section>
  )
}