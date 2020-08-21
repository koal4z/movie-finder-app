import { createStore } from 'redux';

const initialState = {
  tab: 'link1'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return { ...state, tab: action.tab };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
