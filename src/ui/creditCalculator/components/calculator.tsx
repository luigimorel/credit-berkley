import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Calculator = () => {
    return (<>
    <Typography>This is the credit calculator 
    </Typography>
    <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                    style={{
                        height: '3rem',
                        marginTop: '700px',
                        color: '#1D9F6E',
                        border: '1px solid #1D9F6E',
                        width: '180px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                    }}
                >
                    VIEW REPORT CHANGES
                </Button>

                </Box>
                </>
    )};

export default Calculator;
