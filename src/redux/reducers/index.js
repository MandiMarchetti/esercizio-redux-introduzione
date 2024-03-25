const initialState = {
  favorities: {
    companies: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
        favorities: {
          ...state.favorities,
          companies: state.favorities.companies.concat(action.payload),
        },
      };
  }
};

export default mainReducer;
