export function useAddToCart(setNumItemsInCart, cartItems, setCartItems) {
  const handleAddToCart = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    // const value = e.target.value;
    setNumItemsInCart((prev) => prev + 1);
    setCartItems((prev) => new Map(prev).set(value, cartItems.get(value) + 1 || 1));
  };

  return { handleAddToCart };
}
