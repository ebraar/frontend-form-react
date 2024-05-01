const express = require("express");
require("dotenv").config()
const database = require('./db/database.js')
 const userRoutes = require('./routes/userRoutes');
 const projectRoutes = require('./routes/projectRoutes');
const port = process.env.PORT || 5001

const app = express();
app.use(express.json()) 
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))

app.get("/", (req, res) => { 
  res.json({
    message: "Hoş Geldiniz"
  });
})

// app.use(
//   mongoSanitize({
//       replaceWith: '_',
//   }),
// );


 app.use('/api', userRoutes);
app.use('/api', projectRoutes);

app.listen(port, () => { 
  database();
  console.log(`Server ${port} portundan çalışıyor..`);
}) 

module.exports = app;