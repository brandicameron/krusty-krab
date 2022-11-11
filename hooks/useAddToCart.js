import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

export function useAddToCart(state, setState) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { setItemName } = useContext(AppContext);

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
    setItemName(value);
    setState((prev) => new Map(prev).set(value, state.get(value) + 1 || 1));
    setAddedToCart(true);
  };

  return { handleAddToCart, addedToCart };
}
