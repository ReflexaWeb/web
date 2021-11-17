import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { api } from '../../services/api'

import { Section, Container, Title, Produtos } from "./styles";

interface Product {
  id: string;
  name: string;
  product_url: string;
  code: number;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data);

    }
    loadProducts();
  })
  return (
    <Section>
      <Container>
        <Title>
          <h2>Catálogo de produtos</h2>
        </Title>
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
    </Section>
  )
}