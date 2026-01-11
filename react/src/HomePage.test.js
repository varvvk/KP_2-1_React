// HomePage.test.js
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/HomePage';
import React from 'react'; 


// Простой тест, который не использует моки, только проверяет рендеринг
describe('HomePage Component', () => {

  test('renders HomePage and displays welcome message', () => {
    render(<HomePage />);

    // Проверяем, что заголовок "Добро пожаловать в «The Shoes»" присутствует
    expect(screen.getByText(/Добро пожаловать в «The Shoes»/i)).toBeInTheDocument();
  });

  test('renders about us section', () => {
    render(<HomePage />);

    // Проверяем, что заголовок "О нас" отображается
    expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    // Проверяем, что текст о магазине отображается
    expect(screen.getByText(/«The Shoes» — это магазин/i)).toBeInTheDocument();
  });

  test('renders header image', () => {
    render(<HomePage />);

    // Проверяем, что картинка с классом 'header' присутствует
    const headerImage = screen.getByAltText('Header');
    expect(headerImage).toBeInTheDocument();
  });
});
