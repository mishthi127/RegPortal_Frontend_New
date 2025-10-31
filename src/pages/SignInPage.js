// src/pages/SignInPage.js
import React, { useState } from 'react';
import axios from 'axios';
import AuthLayout from '../components/AuthPage/AuthLayout.js';
import DecoratedInput from '../components/AuthPage/DecoratedInput.js';
import DecoratedPasswordInput from '../components/AuthPage/DecoratedPasswordInput.js';
import DecoratedButton from '../components/AuthPage/DecoratedButton.js';
import GoogleButton from '../components/AuthPage/GoogleButton.js';
import { ReactComponent as NewInputDeco } from '../assets/new-input-deco.svg';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${BASE_URL}/login/`, { email, password });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      window.location.href = '/profile';
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post(`${BASE_URL}/api/auth/google/`, { token });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      if (res.data.needs_completion) {
        window.location.href = '/complete-profile';
      } else {
        window.location.href = '/profile';
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Google login failed.');
    }
  };

  return (
    <AuthLayout
      promoTitle="WELCOME BACK!"
      promoSubtitle="Sign in to continue your journey with us"
    >
      <h2 className="font-display text-3xl font-semibold text-gray-800">SIGN IN</h2>
      <p className="text-brand-gray mt-2">
        If you don't have an account?{' '}
        <a href="/register" className="text-dark-orange font-semibold">
          Sign up
        </a>
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <DecoratedInput
            key="email"
            id="email"
            label="Email ID"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <DecoratedPasswordInput
            key="password"
            id="password"
            label="Password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p key="error" className="text-sm text-brand-red text-center mt-4">
            {error}
          </p>
        )}

        <div key="forgot-link" className="text-right mt-2">
          <a
            href="/forgot-password"
            className="text-sm text-dark-orange hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <div key="divider" className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        {/* --- CUSTOM GOOGLE BUTTON --- */}
        <div key="google-btn" className="flex justify-center">
          <GoogleButton
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google login failed')}
          />
        </div>

        <div
          key="bottom-buttons"
          className="mt-8 flex items-center justify-between"
        >
          <a
            href="/register"
            className="relative h-10 flex items-center justify-center px-6 group focus:outline-none"
          >
            <NewInputDeco
              className="absolute inset-0 w-full h-full text-black group-hover:text-dark-orange transition-colors duration-200"
              preserveAspectRatio="none"
            />
            <span className="relative z-10 text-sm font-medium text-gray-800">
              Create New Account
            </span>
          </a>

          <DecoratedButton type="submit" className="justify-center">
            Sign In
          </DecoratedButton>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignInPage;
