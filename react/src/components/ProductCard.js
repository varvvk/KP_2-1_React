import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

import PropTypes from 'prop-types';  

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productCard__card}>
  <img src={product.image} alt={product.name} className={styles.productCard__image} />
  <h2>{product.name}</h2>
  <p>Цена: {product.price} BYN</p>
  <button onClick={handleAddToCart} className={styles.productCard__button}>
    Добавить в корзину
  </button>
  <Link to={`/product/${product.id}`} className={styles.productCard__link}>Подробнее</Link>
</div>

  );
};


ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
