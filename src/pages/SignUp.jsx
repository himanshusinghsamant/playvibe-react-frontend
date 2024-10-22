import React from "react";
import bgVideo from "../assets/bg-video.mp4";
import bgImage from "../assets/img-3.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      formData.append("coverimage", data.coverimage[0]);
      formData.append("username", data.username);
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      
      const registerUrl = "http://localhost:8000/api/v1/users/register";
      
      const response = await fetch(registerUrl, {
        method: "POST",
        body: formData,
      });

      const resp = await response.json();
      if (resp.success) {
        reset();
        navigate("/signin");
      } else {
        console.error(resp.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section className="bg-black">
      <div className="video-container h-[100vh] relative overflow-x-hidden">
        <video
          autoPlay
          loop
          muted
          className="background-video hidden lg:block w-[100vw] fixed"
        >
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
                New user! Create your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-white">
                    Avatar
                  </label>
                  <div className="mt-2">
                    <input
                      id="avatar"
                      name="avatar"
                      type="file"
                      accept="image/*"
                      {...register("avatar")}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverimage" className="block text-sm font-medium leading-6 text-white">
                    Cover Image
                  </label>
                  <div className="mt-2">
                    <input
                      id="coverimage"
                      name="coverimage"
                      type="file"
                      accept="image/*"
                      {...register("coverimage")}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      {...register("username", { required: "Username is required" })}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.username && (
                      <span className="text-red-300">{errors.username.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-white">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      {...register("fullname", { required: "Full name is required" })}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.fullname && (
                      <span className="text-red-300">{errors.fullname.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <span className="text-red-300">{errors.email.message}</span>
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
                      name="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 10, message: "Password must be at least 10 characters long" }
                      })}
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.password && (
                      <span className="text-red-300">{errors.password.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border-2 border-indigo-600 bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-white 
                    transition-all ease-in-out
                    shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="flex justify-center mt-10 text-center text-sm text-gray-500">
                Already have an account?
                <Link to="/signin" className="mx-1 underline text-indigo-600 hover:text-indigo-500">
                  Sign In!
                </Link>
              </p>
            </div>
          </div>

          <div className="w-[50%] hidden lg:block fixed top-0 right-0 h-[100vh]">
            <img src={bgImage} alt="background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
