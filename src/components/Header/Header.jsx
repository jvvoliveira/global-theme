import React, {useContext} from "react";
import styles from "./Header.module.scss";
import { ThemeContext } from '../../ThemeContextParent';

const Header = () => {

    const { globalTheme } = useContext(ThemeContext);

    return(
        <header className={`${styles.header} ${styles[globalTheme]}`}>
            <p className={styles[globalTheme]}>Header - {globalTheme}</p>
        </header>
    )
};

export default Header;