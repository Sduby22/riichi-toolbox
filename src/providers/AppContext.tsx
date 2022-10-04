import { createContext, useContext, useReducer } from "react";

type ActionTypes = {
  "toggle-drawer": undefined;
  "set-title": string;
  "set-tabValue": number;
};

const initialState = {
  tabValue: 0,
  drawerOpen: false,
  drawerWidth: 240,
  title: "Riichi Toolbox",
};

type ActionMap<Actions> = {
  [K in keyof Actions]: Actions[K] extends undefined
    ? {
        type: K;
      }
    : {
        type: K;
        payload: Actions[K];
      };
};

type Action = ActionMap<ActionTypes>[keyof ActionMap<ActionTypes>];

type AppContextType = {
  state: typeof initialState;
  dispatch: (type: Action) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
const { Provider, Consumer } = AppContext;

function contextReducer(
  state: typeof initialState,
  action: Action
): typeof initialState {
  switch (action.type) {
    case "set-tabValue":
      return {
        ...state,
        tabValue: action.payload,
      };
    case "toggle-drawer":
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
      };
    case "set-title":
      return {
        ...state,
        title: action.payload,
      };

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
