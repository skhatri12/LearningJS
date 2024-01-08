
import { create } from 'zustand'
import { getUsers, createUser } from '../api/users';

const useUserstore = create((set, get) => ({
  data: [],
  isLoading: false,
  error: null,
  getUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await getUsers();
      set({ isLoading: false, data: response.data });
    }
    catch (err) {
      set({
        error: err.message, isLoading: false
      })
    }
  },
  createUsers: async (name) => {
    try {
      set({ isLoading: true });
      const response = await createUser(name);
      const updatedData = [...get().data, response.data];
      set({ isLoading: false, data: updatedData });
    }
    catch (err) {
      set({
        error: err.message, isLoading: false
      })
    }
  },


}))

export default useUserstore
