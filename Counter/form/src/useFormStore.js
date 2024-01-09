import { create } from 'zustand';
import { persist } from 'zustand/middleware'
const useFormStore = create(persist((set) => ({
  name: '',
  address: '',
  phone: '',
  setName: (newName) => set({ name: newName }),
  setAddress: (newAddress) => set({ address: newAddress }),
  setPhone: (newPhone) => set({ phone: newPhone }),
}),

  {
    name: 'formStore',
    getStorage: () => sessionStorage,
  }));

export default useFormStore; 
