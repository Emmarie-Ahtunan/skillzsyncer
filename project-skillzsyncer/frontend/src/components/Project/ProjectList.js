import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/projects');
                setProjects(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(project => 
        project.skills.toLowerCase().includes(search.toLowerCase()) || 
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search projects by skill, title, or description" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
            />
            {filteredProjects.map((project) => (
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p><strong>Skills Needed:</strong> {project.skills}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
