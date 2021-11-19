import React, { useState, useEffect } from "react";
import { useRouteMatch } from 'react-router-dom';

import { api } from '../../services/api'

import { Section, Container } from './styles'

interface codeParams {
  code: string;
}

interface Product {
  id: string;
  name: string;
  code: string;
  product_url: string;
}

export function DetailsProducts() {
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  const { params } = useRouteMatch<codeParams | null>();


  useEffect(() => {
    async function detailProduct() {
      const response = await api.get(`products/${params?.code}`);
      setProductDetail(response.data);
      //console.log(response.data);
    }
    detailProduct();
  })


  return (
    <>
      {productDetail && (
        <Section>
          <Container>
            <div className="imgDetailProduct">
              <img
                src={productDetail.product_url}
                alt={productDetail.name}
              />
            </div>
            <div className="descDetailProduct">
              <h2>{productDetail.name}</h2>
              <span>Código: {productDetail.code}</span>
              <a href=""> Solicite um orçamento</a>
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
