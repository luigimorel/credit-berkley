import { Box, IconButton, makeStyles } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';

const useStyles = makeStyles(() => ({
    dropDownContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    dropdownButtons: {
        marginLeft: '61px',
        width: '57px',
        marginTop: '30px',
        height: '57px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));
const DropDownenu = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.dropDownContainer}>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
            </Box>
        </div>
    );
};

export default DropDownenu;
