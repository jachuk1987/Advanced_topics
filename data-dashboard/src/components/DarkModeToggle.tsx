import { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../context/ThemeContext';

export const ToggleTheme = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      <Brightness4 />
    </IconButton>
  );
};
