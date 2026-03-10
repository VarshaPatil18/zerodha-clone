import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [user, setUser] = useState('User');

  return (
    <GeneralContext.Provider value={{ user, setUser }}>
      {children}
    </GeneralContext.Provider>
  );
};