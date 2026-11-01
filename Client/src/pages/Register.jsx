import React from 'react'

export default function Register() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-15">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg shadow-blue-200">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                        Create an account
                    </h1>

                    <form className="flex flex-col gap-4">

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Your Name Here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="dob"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Date Of Birth
                            </label>

                            <input
                                type="date"
                                id="date"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-center mt-4 text-gray-600">
                        Already have an account:{" "}
                        <a href="/register" className="text-blue-600 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
