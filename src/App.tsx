import UserLogin from './accounts/login/login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FindAccount from './accounts/findAccount/findAccount';
import SignUp from './accounts/signup/signUp';
import ResetPassword from './accounts/resetPassword/resetPassword';
import Feed from './ui/feed-ui/feed';
import SignUpSecondary from './accounts/secSignUp/secSignUp';
import Dashboard from './ui/dashboard/dashboard';
import Messenger from './ui/messenger/messenger';
import CreditCalculator from './ui/creditCalculator/creditCalculator';
import SecondaryFeed from './ui/secFeed/secondaryFeed';
import MobileChat from './ui/messenger/components/mobileChat';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={UserLogin} />
                    <Route exact path="/create-account" component={SignUp} />
                    <Route
                        exact
                        path="/reset-password"
                        component={ResetPassword}
                    />
                    <Route exact path="/find-account" component={FindAccount} />
                    <Route
                        exact
                        path="/sec-signup"
                        component={SignUpSecondary}
                    />
                    <Route exact path="/feed" component={Feed} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/messenger" component={Messenger} />
                    <Route exact path="/chat" component={MobileChat} />
                    <Route
                        exact
                        path="/credit-calculator"
                        component={CreditCalculator}
                    />
                    <Route
                        exact
                        path="/secondary-feed"
                        component={SecondaryFeed}
                    />
                </Switch>
            </Router>
        </>
    );
};

export default App;
