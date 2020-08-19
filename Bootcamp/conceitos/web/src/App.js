import React, { useState, useEffect, useCallback } from 'react';

import Header from './components/Header';

import './App.css';
import api from './services/api';

const App = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);
  

  const handleAddProject = async () => {
      const response = await api.post('projects', {
        title: `New Project ${Date.now()}`,
        owner: "Lucas Vanni"
      });

    setProjects([...projects, response.data]);
  };

  return (
    
    <div>
      <Header title="Homepage" >
        {projects.map(project => 
          <li key={project.id} >{project.title}</li>
        )}
      </Header>
      
      <button 
        type="button" 
        onClick={handleAddProject}
      >
        Adicionar Projeto
      </button>
    </div>
  )
};

export default App;