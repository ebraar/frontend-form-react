import React, { useState } from 'react';
import './App.css';
import { TiTick } from 'react-icons/ti';
import { IoMdText } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';

const App = ({ onNext }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    youare: '',
    youhave: '',
    typeOfProject: '',
    budget: '',
  });

  const handleSubmitUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        firstname: formData.firstName,
        lastname: formData.lastName,
        username: formData.userName,
        email: formData.email,
      });
      console.log(response.data);
      nextStep(); // Başarılı ise sonraki adıma geç
    } catch (error) {
      console.error('User submission error:', error);
    }
  };

  // İkinci adım için handler
  const handleSubmitProject = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', {
        youAre: formData.youare,
        youHave: formData.youhave,
        typeOfProject: formData.typeOfProject,
        budget: formData.budget,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Project submission error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const canProceed = formData.firstName && formData.lastName && formData.userName && /\S+@\S+\.\S+/.test(formData.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canProceed) {
      onNext(formData); // Burada doğrulamayı geçen verilerle bir sonraki adıma geçilir.
    } else {
      // Doğrulama hatası durumunda uygun kullanıcı geri bildirimi sağlanabilir.
      console.log('Please fill all fields with valid information.');
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  }; 
  switch(currentStep){
    case 1:
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-row items-center justify-center gap-8 p-10 rounded-full">
        <span class="p-2">
          <TiTick className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
        <span class="p-2">
          <IoMdText className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
        <span class="p-2">
          <BsFillPersonFill className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white border border-white rounded-lg p-12">
        <div>
          <h1 class="text-gray-600 pb font-bold">Tell Us About Your Requirements</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} class="flex flex-col items-center justify-center bg-white border border-white rounded-lg p-12">
            <div class="container mx-auto p-4">
            <div class="flex justify-between space-x-4 mb-4">
            <input
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            />
             <input 
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            />
            </div>
          
            <div class="flex justify-between space-x-4">
            <input 
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            name="userName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="User Name"
            />
            <input
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            />
            </div>
           </div>
           <div clas="flex justify-start">
            <button
            onClick={nextStep}
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            Next
            </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center text-white">
        <p>
          Want to contact us? Call us on +91 934834328293, +91 8382912823
        </p>
      </div>
    </div>
  );
  case 2:
    return (
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row items-center justify-center gap-8 p-10 rounded-full">
        <span class="p-2">
          <TiTick className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
        <span class="p-2">
          <IoMdText className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
        <span class="p-2">
          <BsFillPersonFill className="w-10 h-10 text-white rounded-full border-2 border-white"/>
        </span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white border border-white rounded-lg p-12">
        <div>
          <h1 class="text-gray-600 pb font-bold">Tell Us About Your Requirements</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} class="flex flex-col items-center justify-center bg-white border border-white rounded-lg p-12">
          <div class="container mx-auto p-4">
            <div class="flex justify-between space-x-4 mb-4">
              <select
                className="content-select w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="youare" value={formData.youare} onChange={handleChange}>
                <option value="">You are...</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Industrial Engineer">Industrial Engineer</option>
                <option value="Professional Photographer">Professional Photographer</option>
                <option value="Web Designer">Web Designer</option>
                <option value="Graphic Artist">Graphic Artist</option>
                <option value="Other">Other</option>
              </select>

              <select className="content-select w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="youhave" value={formData.youhave} onChange={handleChange}>
                <option value="">You have...</option>
                <option value="Idea">Idea</option>
                <option value="Company">Company</option>
                <option value="Budget">Budget</option>
                <option value="Worker">Worker</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="flex justify-between space-x-4">
          <select className="content-select w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" name="typeOfProject" value={formData.typeOfProject} onChange={handleChange}>
              <option value="">Type of Project</option>
              <option value="Digital Branding">Digital Branding</option>
              <option value="Professional Photography">Professional Photography</option>
              <option value="Web Design">Web Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
            <input
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget"
            />
          </div>
          <br></br>
          <div class="flex justify-between space-x-4">
            <button onClick={prevStep} type="button"
            class="bg-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded p-2">
              Previous
            </button>
            <button type="submit" class="bg-green-600 text-white font-bold py-2 px-4 rounded p-2">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
      </div>
    )
  default:
    return null;
}
};

export default App;
