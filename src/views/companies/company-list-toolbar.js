import { Box, Button, Card, CardContent, TextField, InputAdornment, SvgIcon, Typography } from '@mui/material';
import { IconDownload, IconSearch, IconUpload } from '@tabler/icons';

export const CompanyListToolbar = (props) => (
    <Box {...props}>
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
        >
            <Typography sx={{ m: 1 }} variant="h4">
                Companies
            </Typography>
            <Box sx={{ m: 1 }}>
                <Button startIcon={<IconUpload fontSize="small" />} sx={{ mr: 1 }}>
                    Import
                </Button>
                <Button startIcon={<IconDownload fontSize="small" />} sx={{ mr: 1 }}>
                    Export
                </Button>
                <Button color="primary" variant="contained">
                    Add Companies
                </Button>
            </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
            <Card>
                <CardContent>
                    <Box sx={{ maxWidth: 500 }}>
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon color="action" fontSize="small">
                                            <IconSearch />
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            placeholder="Search company"
                            variant="outlined"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);
