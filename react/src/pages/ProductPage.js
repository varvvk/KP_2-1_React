import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import styles from '../styles/ProductPage.module.css';

import { useDispatch } from 'react-redux'; // Импортируем useDispatch
import { addToCart } from '../actions/cartActions';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useProducts();
  const product = products.find((p) => p.id === parseInt(id));
  const focusRef = useRef();

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Состояние для текущего изображения
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  if (!product) {
    return <h1 ref={focusRef}>Product not found!</h1>;
  }

  const images = [product.image, product.image2]; // Массив изображений
  const recommendedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNavigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Диспатчим экшен для добавления товара в корзину
  };

  return (
    <div className={styles.container} ref={focusRef}>
      <div className={styles.productWrapper}>
        <div className={styles.slider}>
          <button onClick={handlePrev} className={styles.sliderButton}>
            &lt;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`${product.name} - ${currentImageIndex + 1}`}
            className={styles.sliderImage}
          />
          <button onClick={handleNext} className={styles.sliderButton}>
            &gt;
          </button>
        </div>

        <div className={styles.productDetails}>
          <h1>{product.name}</h1>
          <p>Бренд: {product.brand}</p>
          <p>Цена: {product.price} BYN</p>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Добавить в корзину
          </button>

          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <button
                onClick={() => toggleSection('features')}
                className={styles.accordionButton}
              >
                Особенности {openSection === 'features' ? '-' : '+'}
              </button>
              {openSection === 'features' && (
                <div className={styles.accordionContent}>
                  <ul>
                    <li>Дизайн: Современный внешний вид.</li>
                    <li>Материалы: Верх из высококачественных материалов.</li>
                    <li>Подошва: Эргономичная конструкция с амортизацией.</li>
                    <li>Комфорт: Дышащие материалы и мягкая отделка.</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.accordionItem}>
              <button
                onClick={() => toggleSection('usage')}
                className={styles.accordionButton}
              >
                Идеально подходит для {openSection === 'usage' ? '-' : '+'}
              </button>
              {openSection === 'usage' && (
                <div className={styles.accordionContent}>
                  <ul>
                    <li>Повседневного использования.</li>
                    <li>Спорта и тренировок.</li>
                    <li>Активных прогулок и путешествий.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recommended}>
        <h2>Также покупают</h2>
        <div className={styles.recommendedGrid}>
          {recommendedProducts.map((recProduct) => (
            <div
              key={recProduct.id}
              className={styles.recommendedItem}
              onClick={() => handleNavigateToProduct(recProduct.id)}
            >
              <img
                src={recProduct.image}
                alt={recProduct.name}
                className={styles.recommendedImage}
              />
              <p>{recProduct.name}</p>
              <p>{recProduct.price} BYN</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
