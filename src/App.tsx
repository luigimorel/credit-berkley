import UserLogin from "./accounts/login/login";
import { Route, Switch } from "react-router";
import FindAccount from "./accounts/findAccount/findAccount";
import SignUp from "./accounts/signup/signUp";
import ResetPassword from "./accounts/resetPassword/resetPassword";
import Feed from "./ui/feed-ui/feed";
import SignUpSecondary from './accounts/secSignUp/secSignUp'
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={UserLogin} />
        <Route exact path="/create-account" component={SignUp} />
        <Route exact path="/reset-password" component={FindAccount} />
        <Route exact path="/find-account" component={ResetPassword} />
        <Route exact path="/sec-signup" component={SignUpSecondary} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </>
  );
};

export default App;
