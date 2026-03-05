'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

type CartContextValue = {
  cart: CartItem[];
  totalItems: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'senior-dog-runner-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((current) => {
      const found = current.find((cartItem) => cartItem.id === item.id);
      if (found) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const value = useMemo(
    () => ({
      cart,
      totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
      isCartOpen,
      toggleCart: () => setCartOpen((prev) => !prev),
      addToCart,
      updateQuantity
    }),
    [cart, isCartOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
