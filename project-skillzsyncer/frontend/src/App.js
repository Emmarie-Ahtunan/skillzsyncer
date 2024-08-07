// src/App.js
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './components/context/AuthContext';
// import PrivateRoute from './utils/PrivateRoute';

import Navbar from './components/Navbar';
import Home from './components/Landing/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import CreateProject from './components/Project/CreateProject';
import ProjectList from './components/Project/ProjectList';
import Messages from './components/Messaging/Messages';

const App = () => {
    
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/update-profile" element={<UpdateProfile />} />
                    <Route path="/create-project" element={<CreateProject />} />
                    <Route path="/project-list" element={<ProjectList />} />
                    <Route path="/messages" element={<Messages />} />
                    
                </Routes>
            </Router>
        </AuthProvider>
    );
}
export default App;