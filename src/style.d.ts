import 'styled-components';
import {ITheme} from "./styles/interfaces/ITheme/ITheme";
import ThemeEnum from "./styles/interfaces/themeEnum/themeEnum";
import Clouds from "./img/Clouds.png"

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {
        type: ThemeEnum,
        cardBackground: string,
        cardHeaderBg: string,
        cardIcon : typeof Clouds
    }
}
