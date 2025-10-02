import React from "react";
import { OverlayContextType } from "../Types";

const OverlayContext = React.createContext<OverlayContextType | null>(null);

export default OverlayContext;