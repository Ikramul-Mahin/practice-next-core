'use client'
import React from 'react';

const SignUpPage = () => {
	const handleRegister = async (event)=>{
event.preventDefault()
const newUser={
  name:event.target.name.value,
  email:event.target.email.value,
  password:event.target.password.value
}
const res = await fetch("http://localhost:3000/api/auth/signup/newuser", {
  method: "POST",
  body: JSON.stringify(newUser),
  headers:{
    "content-type":"application/json"
  }
});
console.log(res);

  }
	return (
		<div>
			<h1>Sign Up</h1>
			  <form className='text-center border-4 m-6' onSubmit={handleRegister}>

			  <div>
            <label>Password:</label>

            <input
				
              type="text"
              name="name"
              placeholder='name here'
				  className='border-2 p-2'
            />
          
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
             placeholder='Email here'
				 className='border-2 p-2'
          
            />
           
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder='password here'
				  className='border-2 p-2'
            />
          
          </div>

			

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Sign In</button>
        </form>
		</div>
	);
};

export default SignUpPage;