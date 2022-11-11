export function useAddToCart(state, setState) {
  const handleAddToCart = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setState((prev) => new Map(prev).set(value, state.get(value) + 1 || 1));
  };

  return { handleAddToCart };
}
