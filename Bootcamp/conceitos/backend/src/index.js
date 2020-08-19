const express = require('express');
const { v4, validate } = require('uuid');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());



const projects = [];

function logResults(req, res, next) {
  const { method, url } = req

  let logLabel = `[${method.toUpperCase()}]  ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if(!validate(id)) {
    return res.status(402).json({ error: "Invalid project ID"});
  };

  return next();
};

app.use(logResults);
app.use('/projects/:id', validateProjectId);

app.get('/', (req, res) => {
  return res.json({message: 'Hello users to my api'});
});

app.get('/projects', (req, res) => {
  const { title } = req.query;
  
  
  const results = title ?
    // * Encontrar todos os títulos que contém title
   projects.filter(project => project.title.includes(title)) : 
   // * Retorna os projetos normalmente
   projects;

  return res.json(results);
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  const project = { id: v4(), title, owner};

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;  
  const { title, owner} = req.body;
  
  // * Ao invés de encontrar o objeto dentro do array
  // const project = projects.find(project => project.id === id);

  // * Eu encontro a posição desse objeto dentro do array
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return res.status(404).json({ error: "Project is not found"})
  }

  // Criando novas informações...
  const project = {
    id,
    title,
    owner
  };

  // Injetando novas informações no array;
  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(404).json({error: 'Project is not found'});
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});



app.listen(3333, () => {
  console.log('🚀 backend started');
});
