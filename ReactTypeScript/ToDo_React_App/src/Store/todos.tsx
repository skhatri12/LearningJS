import { ReactNode, createContext } from "react";

export type TodosProviderProps = {
  children: ReactNode
}

export type TodosContext = {
  todos: []
}

export const todosContext = createContext(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  return <todosContext.Provider value={ }>
    {children}
  </todosContext.Provider>
}