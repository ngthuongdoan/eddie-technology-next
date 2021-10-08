import Product from '@model/Product';

const toCurrency = (currency: number): string => {
  return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currency);
};
function removeNullAndUndefined<T>(obj: T): T {
  return Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {} as T);
}

const getProductPrice = (product: Product) => {
  if (product.promotionPrice) {
    return product.promotionPrice;
  }
  return product.listedPrice;
};

export { toCurrency, removeNullAndUndefined, getProductPrice };
