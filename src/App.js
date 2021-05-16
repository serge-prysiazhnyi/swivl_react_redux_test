import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import UsersPage from "./pages/usersPage";
import UserPage from "./pages/userPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`/user/:userId`}>
            <Link to="/">Home</Link>
            <UserPage />
          </Route>
          <Route path="/">
            <UsersPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
