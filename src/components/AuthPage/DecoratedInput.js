// src/components/AuthPage/DecoratedInput.js
import React from 'react';
import { ReactComponent as InputDeco } from '../../assets/input-deco.svg';

const DecoratedInput = ({ id, label, type = 'text', ...props }) => {
  const inputProps = {
    id, name: id, type,
    className: "relative z-10 w-full h-full bg-transparent border-none focus:outline-none px-3 text-sm text-gray-800 placeholder:text-gray-500",
    ...props
  };
  return (
    React.createElement('div', null,
      React.createElement('label', { htmlFor: id, className: "block text-xs font-medium text-gray-700 mb-1" }, label),
      React.createElement('div', { className: "relative h-8 group" }, 
        React.createElement(InputDeco, { 
          className: "absolute top-0 left-0 w-full h-full text-brand-dark group-focus-within:text-dark-orange transition-colors duration-200 pointer-events-none",
          preserveAspectRatio: "none" 
        }),
        React.createElement('input', inputProps)
      )
    )
  );
};
export default DecoratedInput;