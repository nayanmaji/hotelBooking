import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",cpassword:""});
    let history = useNavigate();
  const onSubmit = async (e) => {
    const {name,email, password,cpassword}=credentials;
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email, password,cpassword}),
    });
    const json = await response.json();
    setcredentials({name:"",email:"",password:"",cpassword:""})
    //redirect note page
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      history("/")
      console.log("Account created successfully",)
  }
  
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-2 py-2 lg:px-3">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" autoComplete="name" required className="loginfrom" value={credentials.name} onChange={onChange} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="loginfrom" value={credentials.email} onChange={onChange} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="loginfrom" value={credentials.password} onChange={onChange}/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="c-password" className="block text-sm font-medium leading-6 text-gray-900" >Confirm password</label>
                            </div>
                            <div className="mt-2">
                                <input id="cpassword" name="cpassword" type="password" autoComplete="current-cpassword" required className="loginfrom" value={credentials.cpassword} onChange={onChange}/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do you have an account yet ?
                        <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</Link>
                    </p>
                </div>
            </div>

        </>
    );
}