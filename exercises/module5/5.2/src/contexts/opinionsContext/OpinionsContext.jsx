import React from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const sortedOpinions = (opinions) => opinions.sort(function (a, b) {return b.votes-a.votes});

  const exposedValues = {
    sortedOpinions
  }

  return (
      <Context.Provider value={exposedValues}>
        {props.children}
      </Context.Provider>
  );
};

export {
  Context,
  ProviderWrapper,
}