import { createStore } from 'redux';

const initialState = {
  tab: 'popular',
  dataList: [],
  details: '',
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return { ...state, tab: action.tab, dataList: action.dataList };
    case 'QUERY_DATA':
      return {
        ...state,
        tab: `searching for... ${action.tab}`,
        dataList: action.dataList
      };
    case 'DETAILS_DATA':
      return {
        ...state,
        details: action.details
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
