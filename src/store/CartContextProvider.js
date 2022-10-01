import { CartContext } from "./cartContext";
import { useReducer } from "react";

const getStorageItems = localStorage.getItem("items");

const initialValue = {
  items: JSON.parse(getStorageItems) || [],
  totalCartPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const totalCartPrice =
        state.totalCartPrice + action.payload.price * action.payload.amount;
      const existingCartIndexItem = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const existingCartItem = state.items[existingCartIndexItem];

      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndexItem] = updatedItem;
      } else {
        updatedItem = {
          ...action.payload,
        };
        updatedItems = state.items.concat(updatedItem);
      }

      localStorage.setItem("items", JSON.stringify(updatedItems));

      return {
        items: updatedItems,
        totalCartPrice,
      };
    }
    case "REMOVE_ITEM": {
      const existingCartIndexItem = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const existingCartItem = state.items[existingCartIndexItem];

      const totalCartPrice = state.totalCartPrice - existingCartItem.price;

      let updatedItems;

      if (existingCartItem.amount === 0) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount--,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndexItem] = updatedItem;
      }
      return {
        items: updatedItems,
        totalCartPrice,
      };
    }

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const cartContext = {
    items: state.items,
    totalCartItems: state.totalCartPrice,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
