import React from "react";

export const CartContext = React.createContext({
  items: [],
  totalCartItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
