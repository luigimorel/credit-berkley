import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

// Interface for the donut charts
interface DonutProps {
    value: number;
    size: number;
}

const useStyles = makeStyles(() => ({
    donutChart: {
        color: '#22BA55',
    },
}));
const Donut: React.FC<DonutProps> = ({ value, size }) => {
    const classes = useStyles();
    return (
        <CircularProgress
            size={`${size}%`}
            value={value}
            thickness={10}
            variant="static"
            className={classes.donutChart}
        />
    );
};

export default Donut;
