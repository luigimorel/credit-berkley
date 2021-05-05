import React from 'react'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));
const AccountHealth = () => {

    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            hello
        </div>
    )
}

export default AccountHealth
