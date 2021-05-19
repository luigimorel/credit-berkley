import { Box, makeStyles } from '@material-ui/core';

import MobileMenu from '../../feed-ui/components/mobileMenu';
import InputComponent from '../../feed-ui/components/input.component';
import ChartContainer from '../../dashboard/components/chartContainer';
import CreditReportChanges from './creditReportChanges';
import AccountHealth from '../../dashboard/components/accountHealth';
import CreditCardUsage from '../../dashboard/components/creditCardUsage';

const useStyles = makeStyles(() => ({
    mainContainer: {
        background: '#EAF1FC 0% 0% no-repeat padding-box',
        padding: '25px ',
    },

    inputContainer: {
        marginTop: '41px',
    },
}));

const MobileCreditCalculator = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.mainContainer}
        >
            <MobileMenu />
            <Box
                className={classes.inputContainer}
                display="flex"
                flexDirection="column"
            >
                <InputComponent />
                <ChartContainer />
                <CreditReportChanges />
                <AccountHealth />
                <CreditCardUsage />
            </Box>
        </Box>
    );
};

export default MobileCreditCalculator;
