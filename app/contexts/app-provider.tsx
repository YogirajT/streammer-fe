"use client";
import React, { useContext, useReducer } from 'react';

type AppState = {
  sidebarOpen: boolean
}

type ProviderProps = {
  state: AppState,
  toggleSidebar: () => void
}

const defaultAppState: AppState = { sidebarOpen: true };

const AppContext = React.createContext<ProviderProps>({ state: defaultAppState, toggleSidebar: () => {} });

enum AppActionType {
  SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE',
}

interface SidebarToggleAction {
  type: AppActionType;
}

const appContextReducer = (state: AppState, action: SidebarToggleAction) => {
  switch (action.type) {
    case AppActionType.SIDEBAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};

export const AppProvider = (props: React.PropsWithChildren) => {

  const [state, dispatch] = useReducer(appContextReducer, defaultAppState);

  const toggleSidebar = () => dispatch({ type: AppActionType.SIDEBAR_TOGGLE });

  return (
    <AppContext.Provider value={{ state, toggleSidebar }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
