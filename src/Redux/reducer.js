export const initialState = {
  basket: [],
};

const reducer = (state, acion) => {
  switch (acion.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, acion.item],
      };

    default:
      return state;
  }
};

export default reducer;
