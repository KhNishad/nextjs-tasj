"use client";

import { createContext, useContext, useState } from "react";

const ContextStatus = createContext();

const ContextStatusProvider = ContextStatus.Provider;

function StatusProvider({ children }) {
   const [isCartOpen, setIsCartOpen] = useState(false);

   const [tabIndex, setTabIndex] = useState(1);

   const [sideCategory, setSideCategory] = useState(false);
   const [profileMenu, setProfileMenu] = useState(false);

  return (
    <ContextStatusProvider
      value={{
        isCartOpen,
        setIsCartOpen,

        tabIndex,
        setTabIndex,

        sideCategory,
        setSideCategory,
        profileMenu,
        setProfileMenu,
      }}
    >
      {children}
    </ContextStatusProvider>
  );
}

function useStatus() {
  const all = useContext(ContextStatus);
  return all;
}

export { StatusProvider, useStatus };
