import { useTheme, Box } from '@mui/material';

import Router from './routes';

const App: React.FC = () => {
    const theme = useTheme();
    console.log('theme', theme);
    return (
        <Box
            sx={{
                // background: theme.palette.custom.background,
                height: '100vh'
            }}
        >
            <Router />
        </Box>
    );
};

export default App;
