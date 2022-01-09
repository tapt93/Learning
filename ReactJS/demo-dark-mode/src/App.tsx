import './App.css';

import { useSelector } from 'react-redux';
import { selectTheme } from './theme/slice/selector';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { themeActions } from './theme/slice';
import { ThemeState } from './theme/slice/type';
import styled, { ThemeProvider } from 'styled-components';

function App() {
  const theme = useSelector(selectTheme);
  const themeMode = useAppSelector(state => state.theme.themeMode);
  const dispatch = useAppDispatch();

  const changeMode = () => {
    let mode: ThemeState = themeMode === 'light' ? {
      themeMode: 'dark'
    } : {
      themeMode: 'light'
    }
    dispatch(themeActions.changeTheme(mode));
  }

  const AppTheme = styled.div`
    background: ${p => p.theme.body};
    color: ${p => p.theme.color};
  `

  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <button onClick={changeMode}>change mode</button>
        Hello world
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
