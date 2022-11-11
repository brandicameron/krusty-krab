export function useAddToCart(cartItems, setCartItems) {
  const handleAddToCart = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setCartItems((prev) => new Map(prev).set(value, cartItems.get(value) + 1 || 1));
  };

  return { handleAddToCart };
}
