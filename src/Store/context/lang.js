import React, { createContext, useState } from "react";

export const LangContext = createContext();

const LangContextProvider = (props) => {
  const [language, setLanguage] = useState("en");
  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
