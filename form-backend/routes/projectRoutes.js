const express = require('express');
const Project = require('../models/projectInfo');
const projectrouter = express.Router();

// proje oluşturma
projectrouter.post('/projects', async (req, res) => {
  try {
    const newProject = new Project({
      youAre: req.body.youAre,
      youHave: req.body.youHave,
      typeOfProject: req.body.typeOfProject,
      budget: req.body.budget
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error); // Hata detaylarını sunucu loglarına kaydet
    res.status(400).json({ message: 'Proje oluşturulurken bir sorun oluştu. Lütfen girdiğiniz bilgileri kontrol edin ve tekrar deneyin.' });
  } 
});

// proje listeleme
projectrouter.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error); // Hata detaylarını sunucu loglarına kaydet
    res.status(500).json({ message: 'Projeler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' });
  }
});

module.exports = projectrouter;