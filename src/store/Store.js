import { createStore } from 'redux';

const initialState = { todayDate: Date.now};
const reducer = (state, action) => {
    
}

const store = createStore(reducer, initialState);

export default store;