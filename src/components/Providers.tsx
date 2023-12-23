'use client'

import  React from 'react';
import { Store } from "../store/store";

/*interface State {
  Store: Store
}*/
export const Context = React.createContext(Store)
export const useStore = () => React.useContext(Context)

export const Providers = ({ children
}: { children: React.ReactNode}) => {

  return (
    <Context.Provider value={Store}>
      {children}
    </Context.Provider>    
  );
}
