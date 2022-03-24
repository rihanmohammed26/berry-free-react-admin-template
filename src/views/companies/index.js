import { Box, Container } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CompanyListResults from './company-list-results';
import { CompanyListToolbar } from './company-list-toolbar';

const CompanyPage = () => {
    return (
        <MainCard title="Company">
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <CompanyListToolbar />
                    <Box sx={{ mt: 3 }}>
                        <CompanyListResults />
                    </Box>
                </Container>
            </Box>
        </MainCard>
    );
};

export default CompanyPage;
