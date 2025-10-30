import React, { useEffect } from "react";
import GoogleLogo from "../../assets/google-logo.svg";
import GoogleBg from "../../assets/google-bg.svg";

const GoogleButton = ({ onSuccess, onError, size }) => {
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleClick = () => {
    if (!window.google) {
      onError?.();
      return;
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: "email profile",
      callback: onSuccess,
    });

    client.requestAccessToken();
  };

  // Define size-based classes
  const sizeClasses = size === "small"
    ? "w-full max-w-[150px] px-4 py-1 text-xs gap-2"
    : "w-full max-w-xs sm:max-w-sm px-6 py-2 text-sm gap-3";

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex items-center justify-center
        ${sizeClasses}
        text-gray-700 font-medium
        rounded-md overflow-visible
        hover:text-gray-900
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-dark-orange
        transition-all duration-200
      `}
    >
      {/* Background Frame */}
      <img
        src={GoogleBg}
        alt="Google background"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      {/* Content */}
      <img src={GoogleLogo} alt="Google" className="w-4 h-4 relative z-10" />
      <span className="relative z-10">Signup with Google</span>
    </button>
  );
};

export default GoogleButton;
