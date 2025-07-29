import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)),
          });
        } else {
          set({ cart: [...cart, { ...product, qty: 1 }] });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      decreaseQty: (id) => {
        const cart = get().cart;
        const updated = cart
          .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0);
        set({ cart: updated });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "pgallery-cart",
    }
  )
);
