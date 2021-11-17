import React from "react";
import { useParams } from 'react-router-dom';

//import { api } from '../../services/api'

import { Section, Container } from './styles'

interface Params {
  code: string;
  name: string;
}

export function DetailsProducts() {
  const { code, name } = useParams<Params>();
  //const [productDetail, setProductDetail] = useState({});

  /*useEffect(() => {
    async function detailProduct() {
      const response = await api.get(`products/${code}`);
      setProductDetail(response.data);
      //console.log(response.data);
    }
    detailProduct();
  })*/


  return (
    <>
      <Section>
        <Container>
          <div className="imgDetailProduct">

          </div>
          <div className="descDetailProduct">
            <h2> {name} </h2>
          </div>
        </Container>
      </Section>
    </>
  )
}
