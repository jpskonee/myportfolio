import React, { createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const { children } = props;
  const test = "Emmanuel";

  return (
    <StateContext.Provider value={{ test: test }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
