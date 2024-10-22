import React, { useState } from 'react';
import bgVideo from "../assets/bg-video-1.mp4";
import bgImage from "../assets/img-2.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  
  // Watch the form fields directly without needing extra state
  const email = watch("email");
  const password = watch("password");
  
  const onSubmit = async (data) => {
    try {
      const loginUrl = "http://localhost:8000/api/v1/users/login";

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        credentials: "include",
      });

      const resp = await response.json();
      console.log(resp);

      if (resp.success) {
        console.log(resp.message);
        localStorage.setItem("accessToken", resp.data.accessToken);
        localStorage.setItem("refreshToken", resp.data.refreshToken);
        reset();
        navigate("/home");
      } else {
        console.error("Login failed:", resp.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <section className="bg-black">
        <div className="video-container h-[100vh] relative overflow-x-hidden">
          <video autoPlay loop muted className="background-video hidden lg:block w-[100vw] fixed">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="overlay-content hidden lg:block bg-black h-[100vh] w-[100vw] fixed opacity-[0.8]"></div>

          <div className="z-50 absolute w-[100vw]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 lg:w-[700px] bg-black lg:bg-transparent ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#C0C0C0]">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && (
                        <span className="text-red-300">Email is required</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        type="password"
                        {...register("password", { required: true })}
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.password && (
                        <span className="text-red-300">Password is required</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border-2 border-indigo-600 bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-white transition-all ease-in-out shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <p className="flex justify-center mt-10 text-center text-sm text-gray-500">
                  Don't have an account?
                  <Link to="/" className="flex font-semibold leading-6 text-indigo-600 mx-2 hover:text-indigo-500">
                    <span className="underline mx-1">Sign Up!</span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[50%] hidden lg:block fixed top-0 right-0 h-[100vh]">
              <img src={bgImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
