// src/components/Auth/Login.js
import React, { useState, useContext } from 'react';
import api from '../../api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);
    const history = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', formData);
            login(res.data.token);
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
