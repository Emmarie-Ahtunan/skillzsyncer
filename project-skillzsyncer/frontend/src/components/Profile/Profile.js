import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState({ name: '', skills: '', bio: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/profile/${user.id}`);
                setProfile(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfile();
    }, [user.id]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/profile/${user.id}`, profile);
            alert('Profile updated');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="skills" value={profile.skills} onChange={handleChange} placeholder="Skills" />
            <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default Profile;
