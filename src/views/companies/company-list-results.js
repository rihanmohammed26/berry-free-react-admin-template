import { Card, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ScrollBar from 'react-perfect-scrollbar';
// import React, { useEffect, useState } from 'react';
import companies from './api';

function CompanyListResults() {
    // const [companies, setCompanies] = useState();
    // const fetchData = async () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    //     };
    //     await fetch('https://demo1779595.mockable.io/companies', requestOptions)
    //         .then(async (response) => {
    //             const isJson = response.headers.get('content-type')?.includes('application/json');
    //             const data = isJson && (await response.json());

    //             // check for error response
    //             if (!response.ok) {
    //                 // get error message from body or default to response status
    //                 const error = (data && data.message) || response.status;
    //                 return Promise.reject(error);
    //             }

    //             setCompanies(data.companiesList);
    //         })
    //         .catch((error) => {
    //             this.setState({ errorMessage: error.toString() });
    //             console.error('There was an error!', error);
    //         });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // console.log(companies);
    return (
        <Card>
            <ScrollBar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Company</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {companies.map((data) => (
                                <TableRow key={data.id}>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Typography color="textPrimary" variant="body1">
                                                {data.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{data.company}</TableCell>
                                    <TableCell>{data.role}</TableCell>
                                    <TableCell>{data.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </ScrollBar>
        </Card>
    );
}

export default CompanyListResults;
