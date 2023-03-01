import React, { createContext, useState } from 'react';
import { sidebarContextType } from '@/types/activeSideBar';

export const StateContext = createContext<sidebarContextType | null>(null);

export const StateProvider = ({ children }: { children: React.ReactNode }) =>  {
  const [activeSideBar, setActiveSideBar] = useState<boolean>(true);

  return (
    <StateContext.Provider value={{ activeSideBar }}>
      {children}
    </StateContext.Provider>
  );
};
