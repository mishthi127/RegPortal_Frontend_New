// src/components/AuthPage/Stepper.js
import React from 'react';
import { ReactComponent as Step1 } from '../../assets/step1.svg';
import { ReactComponent as Step2Active } from '../../assets/step2-active.svg';
import { ReactComponent as Step2Inactive } from '../../assets/step2-inactive.svg';

const Stepper = ({ currentStep = 1 }) => {
  const lineClass = currentStep === 1 ? 'bg-gray-300' : 'bg-dark-orange';

  // Define classes for the text based on the current step
  const step1TextClass = currentStep === 1 ? 'text-dark-orange font-semibold' : 'text-gray-500';
  const step2TextClass = currentStep === 2 ? 'text-dark-orange font-semibold' : 'text-gray-500';

  return (
    // Margin is reduced to mt-4 for a more compact layout
    React.createElement('div', { className: 'mt-4' },
      React.createElement('div', { className: 'flex items-center' },
        React.createElement(Step1, null),
        React.createElement('div', { className: `flex-auto h-1 mx-2 transition-colors duration-300 ${lineClass}` }),
        currentStep === 1 
          ? React.createElement(Step2Inactive, null)
          : React.createElement(Step2Active, null)
      ),
      
      // --- THIS IS THE FIX ---
      // A new container for the text labels is added below the icons.
      React.createElement('div', { className: 'flex justify-between text-xs mt-1 px-1' },
        React.createElement('span', { className: step1TextClass }, 'Personal info'),
        React.createElement('span', { className: step2TextClass }, 'Team info')
      )
    )
  );
};

export default Stepper;