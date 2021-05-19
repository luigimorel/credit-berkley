import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    barSlider: {
        backgroundColor: '#1D9F6E',
        height: '1rem',
        borderRadius: '167px',
        color: '#0BBC79',
    },
}));
interface ScaledBarProps {
    value: number;
}
const ScaledBar: React.FC<ScaledBarProps> = ({ value }) => {
    const classes = useStyles();
    return (
        <Slider
            value={value}
            step={20}
            min={0}
            max={145000}
            marks
            className={classes.barSlider}
        />
    );
};
export default ScaledBar;
