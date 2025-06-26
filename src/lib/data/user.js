import { create } from 'zustand'

const useAuth = create((set) => ({
  user: true,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
export default useAuth
