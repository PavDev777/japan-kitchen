export const totalCartPriceFunc = (someStorageItems) => {
  const totalCartPrice = JSON.parse(someStorageItems);
  const totalAmount = totalCartPrice
    .map((item) => item.price * item.amount)
    .reduce((total, price) => total + price, 0);
  return totalAmount;
};
