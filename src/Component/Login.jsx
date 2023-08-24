import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    });

    let history = useNavigate();
    const onSubmit = async (events) => {
        events.preventDefault();
        try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        setcredentials({ email: "", password: "" });
        //redirect note page
        if (json.success) {
            localStorage.setItem("token", json.authToken);
            history("/");
            console.log("Login successfully");
        } else {
            console.log(json.Success);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    }


    const onChange = (events) => {
        setcredentials({ ...credentials, [events.target.name]: events.target.value });
    };
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="loginfrom" value={credentials.email} onChange={onChange} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                                <div className="text-sm">
                                    <Link to="#" disabled className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="loginfrom" value={credentials.password} onChange={onChange} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account yet ?
                        <Link to="/SignUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    );
}