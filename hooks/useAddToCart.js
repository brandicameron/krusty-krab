export function useAddToCart(setNumItemsInCart) {
  const handleAddToCart = () => {
    setNumItemsInCart((prev) => prev + 1);
  };

  return { handleAddToCart };
}
