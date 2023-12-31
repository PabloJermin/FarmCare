import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle login logic here (e.g., send data to a server)
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Log in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm">
                        <div className='mb-5'>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                {...register("email", { required: true })}
                                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="Email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">Email is required</p>
                            )}
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                {...register("password", { required: true })}
                                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${errors.password ? "border-red-500" : ""
                                    }`}
                                placeholder="Password"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">Password is required</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
