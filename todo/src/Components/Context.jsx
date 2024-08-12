import React, { createContext } from "react";
import { useState } from "react";
export const Context = createContext();
export const ContextProvider = (props) => {
  const [task, setTask] = useState("");
  const [input, setInput] = useState("");
  return (
    <Context.Provider value={{ task, setTask, input, setInput }}>
      {props.children}
    </Context.Provider>
  );
};
