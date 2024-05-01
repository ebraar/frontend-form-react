const User = require('../models/userInfo');
const express = require('express');
const userRoutes = express.Router();

// kullanıcı oluşturma
userRoutes.post('/users', async (req, res) => {
    try {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
        // Özelleştirilmiş hata mesajı dönmek
        console.error(error); // Sunucu loglarında tam hatayı kaydetmek için
        res.status(400).json({ message: "Kullanıcı oluşturulamadı, lütfen tekrar deneyin." });
    }
  });

  // kullanıcı listeleme
  userRoutes.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
        console.error(error); // Sunucu loglarında tam hatayı kaydetmek için
        res.status(500).json({ message: "Kullanıcı bilgileri yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin." });
    }
  });


  // kullanıcı bilgileri
  userRoutes.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
      res.status(200).json(user);
    } catch (error) { 
        console.error(error); // Hata detaylarını sunucu loglarına kaydet
        res.status(500).json({ message: 'Kullanıcı bilgileri yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' });
    }
  });

  module.exports = userRoutes;