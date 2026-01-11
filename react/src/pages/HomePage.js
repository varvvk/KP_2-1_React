import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/HomePage.module.css';

import header from '../images/home_main.jpg';
import useProducts from '../hooks/useProducts';

const HomePage = () => {
  const products = useProducts();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={header} alt="Header" />
      </div>
      <h1>Добро пожаловать в «The Shoes»</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className={styles.slide}>
            <img 
              src={product.image} 
              alt={product.name} 
              className={styles.productImage}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </Slider>
      <div className={styles.aboutUs}>
        <h2>О нас</h2>
        <p>
            «The Shoes» — это магазин, где вы найдете лучшие модели обуви для всех случаев жизни.
            Мы предлагаем только качественную продукцию от проверенных брендов.
        </p>
        <p>Казакова Варвара, 2025</p>
      </div>
    </div>
  );
};

export default HomePage;
