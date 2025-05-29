// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets_frontend/assets";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import userImg from "../assets/assets_frontend/user-img.png";
// import {
//   UserCircle2,
//   Home,
//   Stethoscope,
//   Info,
//   Phone,
//   ShoppingCart,
// } from "lucide-react"; // Import icons

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const { token, setToken, userData } = useContext(AppContext);
//   const [imgError, setImgError] = useState(false);

//   const logout = () => {
//     setToken(false);
//     localStorage.removeItem("token");
//     navigate("/"); // Redirect to home after logout
//   };

//   const handleImageError = () => {
//     setImgError(true);
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <img
//         onClick={() => navigate("/")}
//         className="w-32 md:w-44 cursor-pointer"
//         src={assets.logo}
//         alt=""
//       />

//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1 flex items-center gap-2">
//             <Home className="w-4 h-4" /> HOME
//           </li>
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className="py-1 flex items-center gap-2">
//             <Stethoscope className="w-4 h-4" /> ALL DOCTORS
//           </li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="py-1 flex items-center gap-2">
//             <Info className="w-4 h-4" /> ABOUT
//           </li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="py-1 flex items-center gap-2">
//             <Phone className="w-4 h-4" /> CONTACT
//           </li>
//         </NavLink>
//         <NavLink to="/shop">
//           <li className="py-1 flex items-center gap-2">
//             <ShoppingCart className="w-4 h-4" /> SHOP
//           </li>
//         </NavLink>
//         <NavLink to="/thinking">
//           <li className="py-1 flex items-center gap-2">
//             <span className="w-4 h-4">🧠</span> THINKING
//           </li>
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-4">
//         {token && userData ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img
//               className="w-8 rounded-full"
//               src={(!imgError && userData?.image) || userImg}
//               onError={handleImageError}
//               alt="User"
//             />
//             <img
//               className="w-2.5 hidden md:block"
//               src={assets.dropdown_icon}
//               alt=""
//             />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
//                 <p
//                   onClick={() => navigate("/my-profile")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Profile
//                 </p>
//                 <p
//                   onClick={() => navigate("/my-appointments")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Appointments
//                 </p>
//                 <p onClick={logout} className="hover:text-black cursor-pointer">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <>
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-primary text-white px-6 py-2 text-sm rounded-full font-medium hidden md:block hover:bg-opacity-90 transition-all"
//             >
//               Sign in / Sign up
//             </button>
//             <UserCircle2
//               onClick={() => navigate("/login")}
//               className="w-7 h-7 text-primary cursor-pointer md:hidden"
//             />
//           </>
//         )}

//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden"
//           src={assets.menu_icon}
//           alt=""
//         />

//         <button className="bg-[#977c44] text-white px-4 py-2 rounded-full font-medium hover:bg-[#254336] transition-all">
//           AI Assistant 
//         </button>

//         <div
//           className={`${
//             showMenu ? "fixed w-full" : "h-0 w-0"
//           } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//         >
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-32" src={assets.logo} alt="" />
//             <img
//               className="w-7"
//               onClick={() => setShowMenu(false)}
//               src={assets.cross_icon}
//               alt=""
//             />
//           </div>
//           <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
//             <NavLink onClick={() => setShowMenu(false)} to="/">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <Home className="w-4 h-4" /> HOME
//               </p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/doctors">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <Stethoscope className="w-4 h-4" /> ALL DOCTORS
//               </p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/about">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <Info className="w-4 h-4" /> ABOUT
//               </p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/contact">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <Phone className="w-4 h-4" /> CONTACT
//               </p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/shop">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <ShoppingCart className="w-4 h-4" /> SHOP
//               </p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/thinking">
//               <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
//                 <span className="w-4 h-4">🧠</span> THINKING
//               </p>
//             </NavLink>
//             {!token && (
//               <NavLink onClick={() => setShowMenu(false)} to="/login">
//                 <button className="bg-primary text-white px-6 py-2 text-sm rounded-full font-medium mt-4 hover:bg-opacity-90 transition-all w-full">
//                   Sign in / Sign up
//                 </button>
//               </NavLink>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import userImg from "../assets/assets_frontend/user-img.png";
import {
  UserCircle2,
  Home,
  Stethoscope,
  Info,
  Phone,
  ShoppingCart,
} from "lucide-react"; // Import icons

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const [imgError, setImgError] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home after logout
  };

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-32 md:w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 flex items-center gap-2">
            <Home className="w-4 h-4" /> HOME
          </li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 flex items-center gap-2">
            <Stethoscope className="w-4 h-4" /> ALL DOCTORS
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 flex items-center gap-2">
            <Info className="w-4 h-4" /> ABOUT
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 flex items-center gap-2">
            <Phone className="w-4 h-4" /> CONTACT
          </li>
        </NavLink>
        <NavLink to="/shop">
          <li className="py-1 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" /> SHOP
          </li>
        </NavLink>
        <NavLink to="/thinking">
          <li className="py-1 flex items-center gap-2">
            <span className="w-4 h-4">🧠</span> THINKING
          </li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={(!imgError && userData?.image) || userImg}
              onError={handleImageError}
              alt="User"
            />
            <img
              className="w-2.5 hidden md:block"
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-6 py-2 text-sm rounded-full font-medium hidden md:block hover:bg-opacity-90 transition-all"
            >
              Sign in / Sign up
            </button>
            <UserCircle2
              onClick={() => navigate("/login")}
              className="w-7 h-7 text-primary cursor-pointer md:hidden"
            />
          </>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        <button
          onClick={() => navigate("/about")} // Navigate to About page
          className="bg-[#977c44] text-white px-4 py-2 rounded-full font-medium hover:bg-[#254336] transition-all"
        >
          AI Assistant 
        </button>

        

        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-32" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <Home className="w-4 h-4" /> HOME
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <Stethoscope className="w-4 h-4" /> ALL DOCTORS
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <Info className="w-4 h-4" /> ABOUT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <Phone className="w-4 h-4" /> CONTACT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/shop">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" /> SAbeyrahna
              </p>
            </NavLink>
            
            <NavLink onClick={() => setShowMenu(false)} to="/thinking">
              <p className="px-4 py-2 rounded inline-block flex items-center gap-2">
                <span className="w-4 h-4">🧠</span> THINKING
              </p>
            </NavLink>
            {!token && (
              <NavLink onClick={() => setShowMenu(false)} to="/login">
                <button className="bg-primary text-white px-6 py-2 text-sm rounded-full font-medium mt-4 hover:bg-opacity-90 transition-all w-full">
                  Sign in / Sign up
                </button>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
