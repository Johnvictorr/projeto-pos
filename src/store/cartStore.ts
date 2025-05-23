import { create } from "zustand";

type CartItem = {
  idCart: string;
  idProduct: string;
  name: string;
  price: number;
  quantity: number;
  discription: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.idCart !== id),
    })),
  clearCart: () => set({ items: [] }),
}));