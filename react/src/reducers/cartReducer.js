const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        // Если товар уже в корзине, увеличиваем его количество
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Если товара нет в корзине, добавляем его
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case 'INCREMENT_QUANTITY': {
      // Увеличивает количество конкретного товара
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case 'DECREMENT_QUANTITY': {
      // Уменьшает количество конкретного товара (минимум 1)
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }

    case 'REMOVE_FROM_CART': {
      // Полностью удаляет товар из корзины
      return state.filter(item => item.id !== action.payload);
    }

    case 'CLEAR_CART': {
      // Очищает корзину
      return [];
    }

    default:
      return state;
  }
};

export default cartReducer;
