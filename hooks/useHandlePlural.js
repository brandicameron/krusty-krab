import { useContext } from 'react';
import { AppContext } from '../AppContext';

export function useHandlePlural() {
  const { itemName, cartItems } = useContext(AppContext);
  const numItems = cartItems.get(itemName).quantity;

  const itemNameHandlePlural = () => {
    if (numItems > 1) {
      if (itemName.at(-1) === 's') {
        return itemName;
      } else if (itemName.at(-1) === 'y') {
        return itemName.slice(0, -1).trim() + 'ies';
      } else {
        return itemName + 's';
      }
    } else {
      return itemName;
    }
  };

  return { itemNameHandlePlural, numItems };
}
