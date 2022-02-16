import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./GST Billing System/components/auth/ForgetPassword";
import Login from "./GST Billing System/components/auth/Login";
import RecoverPassword from "./GST Billing System/components/auth/RecoverPassword";
import Register from "./GST Billing System/components/auth/Register";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
