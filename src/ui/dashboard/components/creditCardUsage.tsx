import React from 'react'
import { Box, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '576px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));

const CreditCardUsage = () => {
    const classes = useStyles()

    return (
        <div className={classes.mainContainer}>
            Hey form the credit card usage
            
        </div>
    )
}

export default CreditCardUsage
