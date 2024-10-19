import React from 'react'
import bgVideo from "../assets/bg-video-1.mp4";
import bgImage from "../assets/img-2.jpg"

const SignIn = () => {
  return (
    <div>
      <section className="bg-black">
      <div className="video-container h-[100vh] relative overflow-x-hidden">
        <video autoPlay loop muted className="background-video hidden lg:block w-[100vw] fixed">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="overlay-content hidden lg:block bg-black h-[100vh] w-[100vw] fixed opacity-[0.8]"></div>

        <div className="z-50 absolute text-white w-[100vw]">
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
              <form className="space-y-6" action="#" method="POST">
              
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for="password"
                      className="block text-sm font-medium leading-6 "
                    >
                      Password
                    </label>
                    {/* <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div> */}
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border-2 border-indigo-600 bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-white 
                    transition-all ease-in-out
                    shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <p className="flex justify-center mt-10 text-center text-sm text-gray-500">
                Create your account?
                <a
                  href="#"
                  className="flex font-semibold leading-6 text-indigo-600 mx-2 hover:text-indigo-500"
                >
                  go to 
                  <p className="mx-1 underline">SignUp</p>!
                </a>
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
  )
}

export default SignIn
