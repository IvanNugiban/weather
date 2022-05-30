import {createContext, MutableRefObject} from "react";

export const SearchContext = createContext<MutableRefObject<any> | null>(null);