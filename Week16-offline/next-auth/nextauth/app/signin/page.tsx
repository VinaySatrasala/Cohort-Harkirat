"use client"
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password sign-in logic here
    console.log('Signing in with:', { email, password });
    signIn("credentials",{email,password,redirect:false,callbackUrl:"/"})
  };

  const handleGitHubSignIn = () => {
    // Handle GitHub sign-in logic here
    console.log('Redirecting to GitHub for sign-in...');
    signIn("github",{callbackUrl:'/'})
  };

  function handleTwitterSignin(){
    signIn("twitter",{callbackUrl:"/"})
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        
        <form onSubmit={handleEmailSignIn} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">Or</span>
          </div>
        </div>

        <button
          onClick={handleGitHubSignIn}
          className="w-full px-4 py-2 font-semibold text-gray-900 bg-gray-100 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign In with GitHub
        </button>
        <button
          onClick={handleTwitterSignin}
          className="w-full px-4 py-2 font-semibold text-gray-900 bg-gray-100 border rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
