import { Box, useTheme } from '@mui/material';

import Header from '../../components/Header';
import { mockTransactions } from '../../data/mockData';
import { tokens } from '../../theme';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

            <Box>Dashboard / Home page</Box>
        </Box>
    );
};

export default Dashboard;
