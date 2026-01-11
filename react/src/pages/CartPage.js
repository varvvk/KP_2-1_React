import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../actions/cartActions';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [purchaseMessage, setPurchaseMessage] = useState('');

  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleIncrement = productId => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = productId => {
    dispatch(decrementQuantity(productId));
  };

  const handlePurchase = () => {
    setPurchaseMessage('Спасибо за покупку!');
    dispatch({ type: 'CLEAR_CART' });
    setTimeout(() => setPurchaseMessage(''), 3000); // Убираем сообщение через 3 секунды
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Корзина</h1>
      {purchaseMessage && <p className={styles.purchaseMessage}>{purchaseMessage}</p>}
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Ваша корзина пуста!</p>
      ) : (
        <div>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className={styles.decrementButton}
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={styles.incrementButton}
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.quantity} BYN</td>
                  <td>
                    <button
                      className={styles.removeButton}
                      onClick={() => handleRemove(item.id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.totalPrice}>
            <strong>Общая сумма: {calculateTotalPrice()} BYN</strong>
          </div>
          <button
            className={styles.clearButton}
            onClick={handleClearCart}
          >
            Удалить все
          </button>
          <button
            className={styles.purchaseButton}
            onClick={handlePurchase}
          >
            Купить
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
