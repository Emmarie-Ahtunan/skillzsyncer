// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import CreateProject from './components/Project/CreateProject';
import ProjectList from './components/Project/ProjectList';
import Messages from './components/Messaging/Messages';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path
