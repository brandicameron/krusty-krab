import { useState, useEffect } from 'react';

export function useAddToCart(state, setState) {
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (addedToCart) {
      let timer = setTimeout(() => {
        setAddedToCart(false);
      }, 750);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [addedToCart]);

  const handleAddToCart = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setState((prev) => new Map(prev).set(value, state.get(value) + 1 || 1));
    setAddedToCart(true);
  };

  return { handleAddToCart, addedToCart };
}
