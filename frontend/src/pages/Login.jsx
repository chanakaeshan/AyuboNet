// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { Lock, Mail, User } from 'lucide-react';
// import LoginImg from '../assets/assets_frontend/login-img.png';
// import SignUpImg from '../assets/assets_frontend/signup-img.png';

// const Login = () => {
//   const [state, setState] = useState('Sign Up');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { backendUrl, token, setToken } = useContext(AppContext);
//   const [isInputFocused, setIsInputFocused] = useState({
//     name: false,
//     email: false,
//     password: false
//   });

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (state === 'Sign Up') {
//         const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
//         const { data } = response;
//         if (data.success) {
//           localStorage.setItem('token', data.token);
//           setToken(data.token);
//           toast.success("Registration successful!");
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
//         const { data } = response;
//         if (data.success) {
//           localStorage.setItem('token', data.token);
//           setToken(data.token);
//           toast.success("Login successful!");
//         } else {
//           toast.error(data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "An unexpected error occurred. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <div className="container mx-auto min-h-screen flex items-center justify-center p-4 -mt-2 sm:-mt-8 -mb-10">
//       <div className="w-full max-w-5xl bg-[#254336] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

//         {/* Login Form */}
//         <div className="w-full md:w-1/2 p-6 sm:p-8 -mt-5 sm:mt-0 lg:p-12 order-2 md:order-1">
//           <form onSubmit={onSubmitHandler} className="space-y-6">
//             <div className="text-center mb-6 lg:mb-8">
//               <h2 className="text-2xl sm:text-3xl font-bold mt-1" style={{ color: '#977c44' }}>
//                 {state === 'Sign Up' ? 'Get Started' : 'Access Your Account'}
//               </h2>
//             </div>

//             <div className="space-y-4 sm:space-y-5">
//               {state === 'Sign Up' && (
//                 <div className={`relative transition-all duration-300 ${isInputFocused.name ? 'scale-[1.02] sm:scale-105' : ''}`}>
//                   <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Full Name</label>
//                   <div className="relative group">
//                     <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
//                       <User className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${isInputFocused.name ? 'text-primary' : 'text-gray-400'}`} />
//                     </div>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       onFocus={() => setIsInputFocused(prev => ({ ...prev, name: true }))}
//                       onBlur={() => setIsInputFocused(prev => ({ ...prev, name: false }))}
//                       className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>
//                 </div>
//               )}

//               <div className={`relative transition-all duration-300 ${isInputFocused.email ? 'scale-[1.02] sm:scale-105' : ''}`}>
//                 <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Email Address</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
//                     <Mail className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${isInputFocused.email ? 'text-primary' : 'text-gray-400'}`} />
//                   </div>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onFocus={() => setIsInputFocused(prev => ({ ...prev, email: true }))}
//                     onBlur={() => setIsInputFocused(prev => ({ ...prev, email: false }))}
//                     className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className={`relative transition-all duration-300 ${isInputFocused.password ? 'scale-[1.02] sm:scale-105' : ''}`}>
//                 <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Password</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
//                     <Lock className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${isInputFocused.password ? 'text-primary' : 'text-gray-400'}`} />
//                   </div>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onFocus={() => setIsInputFocused(prev => ({ ...prev, password: true }))}
//                     onBlur={() => setIsInputFocused(prev => ({ ...prev, password: false }))}
//                     className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 style={{ backgroundColor: '#977c44' }}
//                 className="w-full text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 {state === 'Sign Up' ? 'Create account' : 'Login'}
//               </button>
//             </div>

//             <div className="text-center mt-6">
//               <div className="mt-6">
//                 {state === 'Sign Up' ? (
//                   <button
//                     type="button"
//                     onClick={() => setState('Login')}
//                     className="text-white hover:text-[#977C44] font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-200"
//                   >
//                     <User className="h-3 w-3 sm:h-4 sm:w-4" />
//                     Already have an account? Login here
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => setState('Sign Up')}
//                     className="text-white hover:text-[#977C44] font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-200"
//                   >
//                     <User className="h-3 w-3 sm:h-4 sm:w-4" />
//                     Create a new account? Click here
//                   </button>
//                 )}
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 order-1 md:order-2">
//           <div className="p-0 sm:p-6 md:p-12 h-48 md:h-full">
//             <div className="h-full flex items-center justify-center">
//               <img
//                 src={state === 'Sign Up' ? SignUpImg : LoginImg}
//                 alt={state === 'Sign Up' ? 'Sign Up' : 'Login'}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User } from 'lucide-react';
import LoginImg from '../assets/assets_frontend/login-img.png';
import SignUpImg from '../assets/assets_frontend/signup-img.png';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { backendUrl, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        toast.success("Registration successful!");
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        const { data } = response;
        localStorage.setItem('token', data.token);
        setToken(data.token);
        toast.success("Login successful!");
        navigate('/'); // Redirect to home on successful login
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center p-4 -mt-2 sm:-mt-8 -mb-10">
      <div className="w-full max-w-5xl bg-[#254336] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Login Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 -mt-5 sm:mt-0 lg:p-12 order-2 md:order-1">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mt-1" style={{ color: '#977c44' }}>
                {state === 'Sign Up' ? 'Get Started' : 'Access Your Account'}
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {state === 'Sign Up' && (
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium text-white sm:text-base">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                style={{ backgroundColor: '#977c44' }}
                className="w-full text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {state === 'Sign Up' ? 'Create account' : 'Login'}
              </button>
            </div>

            <div className="text-center mt-6">
              <div className="mt-6">
                {state === 'Sign Up' ? (
                  <button
                    type="button"
                    onClick={() => setState('Login')}
                    className="text-white hover:text-[#977C44] font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-200"
                  >
                    Already have an account? Login here
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setState('Sign Up')}
                    className="text-white hover:text-[#977C44] font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-200"
                  >
                    Create a new account? Click here
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="p-0 sm:p-6 md:p-12 h-48 md:h-full">
            <div className="h-full flex items-center justify-center">
              <img
                src={state === 'Sign Up' ? SignUpImg : LoginImg}
                alt={state === 'Sign Up' ? 'Sign Up' : 'Login'}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
