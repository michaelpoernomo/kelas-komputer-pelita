import { createContext } from 'react'

export interface MainContextProps {
  getMuridList: () => void
  getAccountSession: (payload: { nama: string; nomer: string }) => void
}

export const MainContext = createContext<MainContextProps>({
  getMuridList: () => {},
  getAccountSession: () => {},
})
