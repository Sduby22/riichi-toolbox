import { createContext, useContext, useReducer } from "react";

type ActionType = "open-drawer" | "close-drawer";

const initialState = {
  drawerOpen: false,
};

type AppContextType = {
  state: typeof initialState;
  dispatch: (action: ActionType) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
const { Provider, Consumer } = AppContext;

function contextReducer(
  state: typeof initialState,
  action: ActionType
): typeof initialState {
  switch (action) {
    case "open-drawer":

    default:
  }
  return state;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { ContextProvider, useAppContext };
