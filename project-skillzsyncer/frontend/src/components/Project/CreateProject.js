import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const CreateProject = () => {
    const [formData, setFormData] = useState({ title: '', description: '', skills: '' });
    const { user } = useContext(AuthContext);
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/projects', { ...formData, owner: user.id });
            history.push('/projects');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder="Project Title" />
            <textarea name="description" onChange={handleChange} placeholder="Project Description" />
            <input type="text" name="skills" onChange={handleChange} placeholder="Required Skills" />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default CreateProject;
