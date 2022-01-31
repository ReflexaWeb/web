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
  unity_reference: string;
  fraction_reference: string;
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
              <span><strong>{productDetail.unity}:</strong> {productDetail.reference}
              </span>
              <span><strong>{productDetail.fraction_reference}:</strong> {productDetail.unity_reference}
              </span>
              <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Reflexa%20Embalagens%20-%20Or%C3%A7ar%20Caixa" rel="noreferrer" target="_blank"> Orçar Caixa</a>
              <a href="https://api.whatsapp.com/send?phone=5541996739627&text=Reflexa%20Embalagens%20-%20Or%C3%A7ar%20Pacote" rel="noreferrer" target="_blank"> Orçar Pacote</a>
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
