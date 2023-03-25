// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { setToken } from './auth';
// import { fetcher } from './api';

// const Register = () => {
//   const router = useRouter();
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const responseData = await fetch(
//         `http://localhost:1337/auth/local/register`,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: userData.email,
//             password: userData.password,
//             username: userData.username,
//           }),
//           method: 'POST',
//         }
//       );
//     //   setToken(responseData);
//       router.redirect('/');
//     } 
//     catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };
//   return (
//     <div >
//       <div>
//         <h1>
//           <span >
//             Register
//           </span>
//         </h1>
//         <form
//           onSubmit={handleSubmit}
          
//         >
//           <div >
//             <label >
//               Username
//             </label>
//             <input
//               className="border-2 py-2 px-3"
//               type="text"
//               name="username"
//               onChange={(e) => handleChange(e)}
//               required
//             />
//           </div>
//           <div >
//             <label className="font-bold text-lg mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
              
//               type="email"
//               name="email"
//               onChange={(e) => handleChange(e)}
//               required
//             />
//           </div>
//           <div >
//             <label >
//               Password
//             </label>
//             <input
              
//               type="password"
//               name="password"
//               onChange={(e) => handleChange(e)}
//               required
//             />
//           </div>
//           <button
            
//             type="submit"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;