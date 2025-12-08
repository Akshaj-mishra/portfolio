import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";


interface AppContextType {
  showheader: boolean;
  setshowheader: Dispatch<SetStateAction<boolean>>;
}


interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<AppContextProviderProps> = (props) => {
  
  const [showheader, setshowheader] = useState<boolean>(true);

  const value: AppContextType = {
    showheader,
    setshowheader,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;