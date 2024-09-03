import {useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
  const params = useParams(); // req.params
  console.log('params', params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
    }, 3000);
  }, []);

  // const product = state.products[params.productId];

  // useEffect(() => {
  //   fetch(`http://localhost:8001/api/products/${params.productId}`)
  //     .then(res => res.json())
  //     .then(data => {});
  // }, [params.productId]);

  return (
    <div>
      <h2>Product Component for product #{params.productId}</h2>
    </div>
  );
};

export default Product;
