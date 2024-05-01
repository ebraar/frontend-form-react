const mongoose = require('mongoose');

const projectInfo = new mongoose.Schema({
    youAre: {
        type: String,
        enum: ['Software Developer', 'Industrial Engineer', 'Professional Photographer', 'Web Designer', 'Graphic Artist', 'Other'],
        required: true
    },
    youHave: {
        type: String,
        enum: ['Idea', 'Company', 'Budget', 'Worker', 'Other'],
        required: true
      },
      typeOfProject: {  
        type: String,
        enum: ['Digital Branding', 'Professional Photography', 'Web Design', 'Mobile App Development', 'Digital Marketing', 'Other'],
        required: true 
      },
      budget: {
        type: String,
        required: false
      },
}); 
 
const project = mongoose.model("Project", projectInfo)

module.exports = project