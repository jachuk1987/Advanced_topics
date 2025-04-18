import { createTheme } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: { default: '#f4f6f8' },
          }
        : {
            background: { default: '#121212' },
          }),
    },
  });
