import { createStore } from 'redux';

const initialState = {
  tab: '',
  dataList: [],
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return { ...state, tab: action.tab };
    case 'QUERY_DATA':
      return { ...state, dataList: action.dataList };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
