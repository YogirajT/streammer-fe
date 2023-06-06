"use client";
import React, { useContext, useReducer } from 'react';

type AppState = {
  sidebarOpen: boolean
  userMenuOpen: boolean
}

type ProviderProps = {
  state: AppState,
  toggleSidebar: () => void
  toggleUserMenu: () => void
}

const defaultAppState: AppState = { sidebarOpen: true, userMenuOpen: false };

const AppContext = React.createContext<ProviderProps>({ state: defaultAppState, toggleSidebar: () => {}, toggleUserMenu: () => {} });

enum AppActionType {
  SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE',
  USER_MENU_TOGGLE = 'USER_MENU_TOGGLE',
}

interface SidebarToggleAction {
  type: AppActionType;
}

const appContextReducer = (state: AppState, action: SidebarToggleAction) => {
  switch (action.type) {
    case AppActionType.SIDEBAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case AppActionType.USER_MENU_TOGGLE:
      return { ...state, userMenuOpen: !state.userMenuOpen };
    default:
      return state;
  }
};

export const AppProvider = (props: React.PropsWithChildren) => {

  const [state, dispatch] = useReducer(appContextReducer, defaultAppState);

  const toggleSidebar = () => dispatch({ type: AppActionType.SIDEBAR_TOGGLE });

  const toggleUserMenu = () => dispatch({ type: AppActionType.USER_MENU_TOGGLE });

  return (
    <AppContext.Provider value={{ state, toggleSidebar, toggleUserMenu }}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext)
