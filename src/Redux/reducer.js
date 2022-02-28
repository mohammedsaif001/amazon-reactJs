export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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
