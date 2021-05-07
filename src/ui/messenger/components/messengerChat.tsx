import React from 'react'
import {makeStyles, Box, Grid} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    mainContainer: {
width: "512px"
    }
}))
const MessengerChat = () => {

    const classes = useStyles()


    return (
        <div className={classes.mainContainer}>
Hello from the chat component of the messenger        </div>
    )
}

export default MessengerChat
