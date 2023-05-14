import { useTheme } from '@mui/material';
import Router from './routes';

const App: React.FC = () => {
    const theme = useTheme();
    console.log('theme', theme);
    return (
        <div>
            <Router />
        </div>
    );
};

export default App;
