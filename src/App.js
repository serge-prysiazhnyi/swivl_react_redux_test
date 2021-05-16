import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UsersPage from "./pages/usersPage";
import UserPage from "./pages/userPage";
import GoBackBtn from "./components/goBackBtn";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={`/user/:userLogin`}>
            <GoBackBtn />
            <UserPage />
          </Route>
          <Route exact path="/">
            <UsersPage />
          </Route>
          <Route>
            <div>404 not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
