import React from 'react';
import GoogleSignInBtn from '../GooleSignInBtn/GoogleSignInBtn';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import UseAuth from '../../../hooks/UseAuth/UseAuth';

const Login = () => {
    const { user } = UseAuth();
    return (

        <div className='mt-10 p-6  w-full md:w-1/2 md:mx-auto lg:p-10 border-2 border-gray-300 rounded-xl '>

            <form className=" grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6 ">
                <h2 className="text-4xl text-center uppercase col-span-6">Login</h2>

                <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            name="password"
                            type="password"
                            autoComplete="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-6">
                    <button className='w-full rounded-md px-3 py-1.5 text-white font-semibold bg-indigo-600 ' type='submit'>Login</button>
                </div>
            </form>
            <GoogleSignInBtn />
        </div>
    );
};



export default Login;