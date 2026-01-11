import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import styles from '../styles/CatalogPage.module.css';

const CatalogPage = () => {
  const products = useProducts();
  
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' или 'desc' для сортировки по цене

  // Фильтрация по бренду
  const filteredProducts = selectedBrand 
    ? products.filter(product => product.brand === selectedBrand) 
    : products;

  // Сортировка по цене
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Собираем список уникальных брендов
  const brands = [...new Set(products.map(product => product.brand))];

  return (
    <div className={styles.container}>
      <h1>Каталог</h1>
      
      <div className={styles.filters}>
        <label>
          Бренд:
          <select onChange={handleBrandChange} value={selectedBrand}>
            <option value="">Все бренды</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label>
          Сортировать по цене:
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>
      </div>

      <div className={styles.grid}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
