import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;