// // // import React from 'react'

// // // export default function ForgotPassword() {
// // //   return (
// // //     <div>
// // //         <h1>Login</h1>
// // //         <div className='name'>
// // //             <label for="name">username</label><br/>
// // //             <input type='text' placeholder="type your username"/><br/>
// // //             <hr></hr>
            
// // //             <label for="Password">Password</label><br/>
// // //             <input type='number' placeholder='type your pasword'/><br/>
// // //             <hr></hr>
// // //         </div>
// // //         <div className='pass'>
// // //             <p>Forgot Password?</p>
// // //         </div>
// // //         <div className='btn'>
// // //         <button type="login">LOGIN</button>
// // //         </div>
// // //         <div className='para'><p>Or Sign Up Using</p><br/>
// // //         <button className='facebook'>
// // //             <img src='facebook.png' alt='facebook'/>
// // //         </button>
// // //         <button className='twitter' >
// // //             <img src='twitter.png' alt='twitter'/>

// // //         </button>
// // //         <button type='google'>
// // //             <img src='google.png' alt='google'/>
            
// // //         </button>
// // //         </div>
// // //     </div>
// // //   )
// // // }
// // import React, { useState } from 'react';
// // import "../style/ForgotPassword.css";

// // // ForgotPasswordForm Component
// // const ForgotPasswordForm = () => {
// //   const [email, setEmail] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   // Handle email input change
// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   // Form submission handler
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!email) {
// //       setError('Please enter your email address');
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     setError('');
// //     setSuccess('');

// //     try {
// //       // Assuming you have a backend API to handle password reset
// //       const response = await fetch('/api/forgot-password', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setSuccess('A password reset link has been sent to your email.');
// //       } else {
// //         setError(data.message || 'Something went wrong, please try again.');
// //       }
// //     } catch (err) {
// //       setError('An error occurred. Please try again later.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="forgot-password-container">
// //       <h2>Forgot Password</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="email">Email Address</label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={handleEmailChange}
// //             placeholder="Enter your email"
// //             required
// //           />
// //         </div>

// //         {error && <div className="error-message">{error}</div>}
// //         {success && <div className="success-message">{success}</div>}

// //         <button type="submit" disabled={isSubmitting}>
// //           {isSubmitting ? 'Submitting...' : 'Submit'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ForgotPasswordForm;
// import React, { useState } from 'react';

// function LoginForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add login logic here
//         console.log("Email:", email);
//         console.log("Password:", password);
//     };

//     return (
//         <div className="login-container">
//             <h1>Hello,</h1>
//             <p>Welcome Back!</p>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter Email"
//                         value={email}
//                         onChange={handleEmailChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Enter Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         placeholder="Enter Password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                 </div>
//                 <p className="forgot-password"><a href='/ForgotPassword?'>Forgot Password?</a> </p>
//                 <button type="submit" className="sign-in-button">Sign In</button>
//             </form>
//             <div className="social-login">
//                 <button className="google-login">Sign in with Google</button>
//                 <button className="facebook-login">Sign in with Facebook</button>
//             </div>
//             <p>Don’t have an account? <a href="/signup">Sign up</a></p>
//         </div>
//     );
// }

// export default LoginForm;
