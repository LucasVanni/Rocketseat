import React, { useEffect, useCallback, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default () => {

  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState([]);
  const [page, setPage] = useState(1);

  const fetchApi = useCallback( async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    setProducts(docs);
    setProductsInfo(productInfo);
  }, []);
  
  useEffect(() => {
    fetchApi(page);
  }, [fetchApi, page]);

  const prevPage = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  const nextPage = () => {
    if (page === productsInfo.pages) return;

    setPage(page + 1);
  }
  
  return (
    <div className="product-list">
      {products.map(product => 
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>

          <Link to={`/products/${product._id}`} >Acessar</Link>
        </article>
      )}
      <div className="actions">
        <button 
          disabled={page === 1}
          onClick={() => prevPage()}
        >
          Anterior
        </button>
        <button 
          disabled={page === productsInfo.pages}
          onClick={() => nextPage()}
        >
          Próximo
        </button>
      </div>
    </div>
   
  );
};