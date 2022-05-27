import 'styled-components';
import {ITheme} from "./styles/interfaces/ITheme/ITheme";

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme{}
}
