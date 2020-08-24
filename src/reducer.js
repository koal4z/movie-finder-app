import { createStore } from 'redux';

const initialState = {
  tab: 'popular',
  dataList: [],
  details: '',
  trailers: '',
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
    case 'TRAILER_DATA':
      return {
        ...state,
        trailers: action.trailers
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
