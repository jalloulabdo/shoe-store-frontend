export const getDiscountedPricePercentage = (originalPrice, price) => {
  const discount = originalPrice - price;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};
