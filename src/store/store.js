import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import { cartReducer } from './reducers/index';


function loadState() {
    const state = localStorage.getItem('cart');

    if (state !== null) {
        return JSON.parse(state);
    }
    return {
        cart: []
    };
}

function saveState(state) {
    localStorage.setItem('cart', JSON.stringify(state));
}

const appReducers = combineReducers({
    cart: cartReducer
})

const store = createStore(
    appReducers,
    loadState(),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(
    throttle(
        () => {saveState(store.getState())},
        2000
    )
);

export default store