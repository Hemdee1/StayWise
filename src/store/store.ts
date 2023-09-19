import { ApartmentType, UserType } from "@/types";
import { create } from "zustand";

interface StoreState {
  user: UserType | null;
  appartments: ApartmentType[] | [];
  updateUser: (user: UserType) => void;
  updateApartments: (appartments: ApartmentType[]) => void;

  // email verification
  email: string | null;
  updateEmail: (email: string) => void;
}

export const useMyStore = create<StoreState>()((set) => ({
  user: null,
  appartments: [],
  updateUser: (user) =>
    set((state) => {
      return {
        user,
      };
    }),
  updateApartments: (appartments) =>
    set((state) => {
      return {
        appartments,
      };
    }),
  //
  email: null,
  updateEmail: (email) =>
    set((state) => {
      return {
        email,
      };
    }),

  // addCart: (item) =>
  //   set((state) => {
  //     const newCart = [item, ...state.cart];

  //     saveToLocalStorage(newCart);
  //     return {
  //       cart: newCart,
  //     };
  //   }),
}));
