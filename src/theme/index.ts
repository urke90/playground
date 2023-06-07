import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        custom: {
            background: '#18201F',
            darkGreen: '#548271',
            green: '#40BE91',
            white: 'F4FFFB',
            whiteBlur: 'rgba(255, 255, 255, 0.08)'
        }
    }
});

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            background: '#18201F';
            darkGreen: '#548271';
            green: '#40BE91';
            white: 'F4FFFB';
            whiteBlur: 'rgba(255, 255, 255, 0.08)';
        };
    }
    interface PaletteOptions {
        custom?: {
            background: '#18201F';
            darkGreen: '#548271';
            green: '#40BE91';
            white: 'F4FFFB';
            whiteBlur: 'rgba(255, 255, 255, 0.08)';
        };
    }
}
