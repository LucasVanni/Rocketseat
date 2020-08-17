const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Config para o express entender JSON
app.use(express.json());

// Adicionando cors para acesso de outra api
app.use(cors());

// Iniciando o banco
mongoose.connect('mongodb://localhost:27017/phclone', 
{ useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });

requireDir('./models')

// Rotas da aplicação
app.use('/api', require('./routes'));


app.listen(3333);