import React from "react";
import { NewToDoListContextType } from "../Types";

const NewToDoListContext = React.createContext<NewToDoListContextType | null>(null);

export default NewToDoListContext;