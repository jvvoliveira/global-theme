import Header from './components/Header/Header';
import ThemeButton from './components/ThemeButton/ThemeButton';
import styles from './App.module.scss';

import ThemeContextParent, { DEFAULT_THEME, DARK_THEME, LIGHT_THEME }  from './ThemeContextParent';

function App() {

  return (
    <ThemeContextParent>
      <div className={styles.app}>
        <Header/>
        <div className={styles.buttons}>
        <ThemeButton changeTheme={DEFAULT_THEME}>Default</ThemeButton>
        <ThemeButton changeTheme={DARK_THEME}>Dark</ThemeButton>
        <ThemeButton changeTheme={LIGHT_THEME}>Light</ThemeButton>
        </div>
      </div>
    </ThemeContextParent>
  );
}

export default App;
