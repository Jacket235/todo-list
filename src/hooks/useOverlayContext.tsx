import { useContext } from "react";
import OverlayContext from "../context/OverlayContext";
import { OverlayContextType } from "../Types";

export function useOverlayContext(): OverlayContextType {
    const context = useContext(OverlayContext);
    if (!context) throw new Error("useOverlayContext must be used within an OverlayProvider");
    return context;
}