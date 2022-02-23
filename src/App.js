import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./common/auth/ForgetPassword";
import Login from "./common/auth/Login";
import Register from "./common/auth/Register";
import RecoverPassword from "./common/auth/RecoverPassword";
import UserProfile from "./common/dashboard/UserProfile";
import Setting from "./common/dashboard/Setting";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            exact
            path="/forgetpassword"
            element={<ForgetPassword />}
          ></Route>
          <Route
            exact
            path="/recoverpassword"
            element={<RecoverPassword />}
          ></Route>
          <Route exact path="/userprofile" element={<UserProfile />}></Route>
          <Route exact path="/settings" element={<Setting />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
