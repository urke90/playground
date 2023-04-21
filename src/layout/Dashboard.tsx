import { Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            HEADER SHOULD GO HERE AND SIDEBAR
            <Outlet />
        </div>
    );
};

export default Dashboard;
