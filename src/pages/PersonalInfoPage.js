import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRegistration } from '../components/AuthPage/RegistrationContext.js';
import AuthLayout from '../components/AuthPage/AuthLayout.js';
import DecoratedInput from '../components/AuthPage/DecoratedInput.js';
import DecoratedPasswordInput from '../components/AuthPage/DecoratedPasswordInput.js';
import DecoratedButton from '../components/AuthPage/DecoratedButton.js';
import Stepper from '../components/AuthPage/Stepper.js';
import GoogleButton from '../components/AuthPage/GoogleButton.js'; // Your custom button

// Using your specified import paths
import { ReactComponent as CountryCodeInputBG } from '../assets/countryCode-input-bg.svg';
import { ReactComponent as InputDeco } from '../assets/input-deco.svg';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useRegistration();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Google Sign-Up logic
  const handleGoogleSuccess = async (credentialResponse) => {
    setError(''); // Clear any previous form errors
    try {
      const token = credentialResponse.credential;
      
      // ✅ 2. Endpoint set to match your old file
      const backendResponse = await axios.post(`${BASE_URL}/auth/google/`, { token });

      localStorage.setItem('access', backendResponse.data.access);
      localStorage.setItem('refresh', backendResponse.data.refresh);

      if (backendResponse.data.needs_completion) {
        navigate('/complete-profile');
      } else {
        navigate('/profile'); // Or to the main dashboard
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Google sign-up failed.');
    }
  };

  // All existing handlers remain unchanged
  const handleChange = e => { 
    updateFormData({ [e.target.id || e.target.name]: e.target.value }); 
  };
  const handlePhoneChange = e => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    updateFormData({ [e.target.id]: numericValue });
  };
  const handleCountryCodeChange = e => {
    let value = e.target.value;
    let digits = value.replace(/[^0-9]/g, '');
    value = '+' + digits;
    updateFormData({ country_code: value });
  };
  const handleNext = (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== confirmPassword) { setError('Passwords do not match.'); return; }
    if (formData.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    updateFormData({ confirm_password: confirmPassword });
    navigate('/register/team-info');
  };

  const createPhoneInput = (id, label) => (
    <div key={id}>
      <label htmlFor={id} className="block text-xs font-medium text-black font-sans mb-1">{label}</label>
      <div className='flex items-center'>
        <div className='relative h-8 w-10 mr-3 group'>
          <CountryCodeInputBG 
            className="absolute top-0 left-0 w-full h-full text-gray-800 group-focus-within:text-dark-orange transition-colors duration-200 pointer-events-none"
            preserveAspectRatio="none"
          />
          <input
            type='text'
            name='country_code'
            id='country_code'
            value={formData.country_code}
            onChange={handleCountryCodeChange}
            maxLength={4}
            className='relative z-10 w-full h-full bg-transparent border-none focus:outline-none text-center text-sm text-gray-800'
          />
        </div>
        <div className='flex-grow'>
          <div className="relative h-8 group">
            <InputDeco 
              className="absolute top-0 left-0 w-full h-full text-gray-800 group-focus-within:text-dark-orange transition-colors duration-200 pointer-events-none"
              preserveAspectRatio="none" 
            />
            <input
              id={id}
              name={id}
              type='tel'
              placeholder='Enter your phone number'
              value={formData[id]}
              onChange={handlePhoneChange}
              className="relative z-10 w-full h-full bg-transparent border-none focus:outline-none px-3 text-sm text-gray-800 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout>
      {/* --- HEADER (Correct Layout) --- */}
      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start md:gap-x-2 mb-2'>
        
        {/* Title: Order 1 on all screens */}
        <h2 className="font-display text-2xl font-semibold text-gray-800 flex-shrink md:order-1">
          CREATE NEW ACCOUNT.
        </h2>
        
        {/* Sign in Link: Order 2 on mobile, Order 3 on desktop (bottom) */}
        <p className="text-brand-gray mt-1 text-xs md:order-3 md:w-full md:mt-0">
          Already a member? <a href="/signin" className="text-dark-orange font-semibold">Sign in</a>
        </p>
        
        {/* Google Button: Order 3 on mobile (bottom), Order 2 on desktop (top-right) */}
        <div className="flex-shrink-0 md:order-2 mt-4 md:mt-0"> 
          <GoogleButton
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google sign-up failed. Please try again.')}
          />
        </div>

      </div>
      {/* --- END OF HEADER --- */}

      <Stepper currentStep={1} />
      <hr className='my-4 border-gray-200'/>

      <form className="mt-4 space-y-2" onSubmit={handleNext}>
        <DecoratedInput
          id="fullname"
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <DecoratedInput
          id="username"
          name="username"
          label="Username"
          placeholder="Create a username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {createPhoneInput('phone_number', 'Phone Number')}
        {createPhoneInput('alternate_phone', 'Alternative Phone Number')}
        <DecoratedInput
          id="email"
          label="Email ID"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <DecoratedPasswordInput
          id="password"
          label="Set Password"
          placeholder="Create a Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className='text-[10px] text-gray-500'>Must be at least 8 characters</p>
        <DecoratedPasswordInput
          id="confirm_password"
          label="Confirm Password"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <p className='text-[10px] text-#0000 font-sans'>*All fields are mandatory</p>
        {error && <p className="text-xs text-dark-orange text-center">{error}</p>}
        <div className='flex justify-end pt-1'>
          <DecoratedButton type='submit'>Confirm</DecoratedButton>
        </div>
      </form>
    </AuthLayout>
  );
};

export default PersonalInfoPage;