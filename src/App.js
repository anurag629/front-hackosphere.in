import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/auth/Home';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Signup from './containers/auth/Signup';
import Dashboard from './containers/Dashboard/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/activate/:uid/:token' element={<Activate />} />
          <Route exact path='/reset-password' element={<ResetPassword />} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>

);

export default App;