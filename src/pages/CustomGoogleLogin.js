import React from 'react';
import { GoogleLogin } from '@react-oauth/google';


const CustomGoogleLogin = ({ onLoginSuccess, onLoginFailure }) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={'single_host_origin'}
      className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50"
    />
  );
};

export default CustomGoogleLogin;