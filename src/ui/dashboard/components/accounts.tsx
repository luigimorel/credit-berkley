import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

import Illustration from '../../../assets/imgIllustration.jpg';

const useStyles = makeStyles((theme) => ({

}));

const accounts: Array<any> = [
    {
        id: 1,
        name: 'Credit',
        image: Illustration,
        descText: 'Last checked: Feb 29, 2020',
    },
    {
        id: 2,
        name: 'Accounts',
        image: Illustration,
        descText: '4 active accounts',
    },
    {
        id: 3,
        name: 'Tax',
        image: Illustration,
        descText: 'Start my taxes now',
    },
    {
        id: 4,
        name: 'Auto',
        image: Illustration,
        descText: 'Link you cars and drivers',
    },
    {
        id: 5,
        name: 'Housing ',
        image: Illustration,
        descText: 'Discover your buying power',
    },
    {
        id: 6,
        name: 'Savings',
        image: Illustration,
        descText: 'Savings',
    },
];


const Accounts = () => {
    const classes = useStyles();
    return (
       <></>
    );
};

export default Accounts;
