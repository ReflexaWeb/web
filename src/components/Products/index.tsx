import React, { useState, useEffect, SelectHTMLAttributes } from "react";
import { Link } from 'react-router-dom';

import { api } from '../../services/api'

import Loading from '../../components/FullLoader';

import { Section, Container, Title, Produtos } from "./styles";

interface Product {
  id: string;
  name: string;
  product_url: string;
  code: number;
}

interface GroupSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  code: string;
  value: string;
  label: string;
}

export function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<GroupSelectProps[]>([]);


  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  async function handleLoadGroup() {
    const response = await api.get('groups');

    const groupsSelect = response.data;
    setSelectedGroup(groupsSelect);
  }
  useEffect(() => {
    handleLoadGroup();
  }, []);

  return (
    <Section>
      <Container>
        <Loading show={loading} />
        <Title>
          <h2>Catálogo de produtos</h2>
        </Title>
      </Container>
      <Container>
        <select>
          <option value="">Filtre por categoria</option>
          {selectedGroup.map(group => (
            <option key={group.id}>
              {group.name}
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
    </Section>
  )
}