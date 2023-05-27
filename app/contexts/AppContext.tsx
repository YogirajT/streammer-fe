import React, { useReducer, useState } from 'react';

const AppContext = React.createContext({ sidbarOpen: false });


type AppState = {
  sidbarOpen: boolean
}

const defaultAppState: AppState = { sidbarOpen: false };

enum AppActionKind {
  SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE',
}

interface SidebarToggleAction {
  type: AppActionKind;
}

const appContextReducer = (state: AppState, action: SidebarToggleAction) => {
  switch (action.type) {
    case AppActionKind.SIDEBAR_TOGGLE:
      return { ...state, sidbarOpen: !state.sidbarOpen };
    default:
      return state;
  }
};

const AppStateProvider = (props: React.PropsWithChildren) => {

  const [state, dispatch] = useReducer(appContextReducer, defaultAppState);

  return (
    <AppContext.Provider value={state}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppStateProvider };