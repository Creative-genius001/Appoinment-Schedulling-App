import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { sidebarContextType } from '@/types/activeSideBar';



export interface SidebarContextInterface {
  activesidebar: boolean
  setActiveSidebar: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    activeSidebar: true,
    setActiveSidebar: (activeSidebar: boolean) => {}
} as SidebarContextInterface

export const StateContext = createContext<sidebarContextType | null>(null);

export const StateProvider = ({ children }: { children: React.ReactNode }) =>  {
  const [activeSidebar, setActiveSidebar] = useState<boolean>(true);

  return (
    <StateContext.Provider value={{ activeSidebar , setActiveSidebar}}>
      {children}
    </StateContext.Provider>
  );
};
