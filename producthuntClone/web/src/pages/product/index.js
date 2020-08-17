import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default ({match: { params: { id }}}) => {

  const [product, setProduct] = useState({});
  
  const fetchApi = useCallback(async () => {
    const response = await api.get(`/products/${id}`);

    setProduct(response.data);
  }, []);
  
  useEffect(() => {
    fetchApi();
  }, [fetchApi])
  
  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <p>
        URL: <a href={product.url}>{product.url}</a>
      </p>
    </div>
  );
}