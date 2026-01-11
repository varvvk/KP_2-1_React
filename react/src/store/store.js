import { combineReducers} from 'redux';
import cartReducer from '../reducers/cartReducer';
import { legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
  cart: cartReducer, // Название "cart" должно совпадать с селектором useSelector
});

const store = createStore(rootReducer);

export default store;
