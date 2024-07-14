// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
// import PrivateRoute from './utils/PrivateRoute';

// Navbar File doesnt exist yet
// import Navbar from './components/Navbar';
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
                {/* <Navbar /> */}
                {/* <h1>Hello, World!</h1> */}
                    <Routes>
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/create-project" element={<CreateProject/>} />
                        <Route path="/project-list" element={<ProjectList/>} />
                        <Route path="/messages" element={<Messages/>} />
                    </Routes>
                </Router>
                </AuthProvider>
    );
}
export default App;