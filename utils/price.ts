export const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price) + " تومان";
