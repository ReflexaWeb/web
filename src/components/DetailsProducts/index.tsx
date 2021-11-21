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
  unity: string;
  reference: string;
  fraction: string;
}

export function DetailsProducts() {
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  const { params } = useRouteMatch<codeParams | null>();


  useEffect(() => {
    async function detailProduct() {
      const response = await api.get(`products/${params?.code}`);
      setProductDetail(response.data);
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
              <span><strong>Código:</strong> {productDetail.code}</span>
              <span><strong>Unidades:</strong> {productDetail.unity}</span>
              <span><strong>Referência:</strong> {productDetail.reference}</span>
              <a href="https://api.whatsapp.com/send?phone=554199229316&text=Converse%20com%20a%20Reflexa%20Embalagens"> Solicite um orçamento</a>
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
