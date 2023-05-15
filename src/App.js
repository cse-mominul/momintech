import "./App.css";
import { cover } from "../src/Assects/pics/cover.jpg";

function App() {
  return (
    <div className="">
      {/* Navbar */}

      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <p className="text-sky-500  font-bold text-xl pl-6">
              M<span className="text-black">_ominTech</span>
            </p>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  class="block link-underline link-underline-black py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  class="block link-underline link-underline-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block link-underline link-underline-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block link-underline link-underline-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="mb-0 mt-12 pt-32  ml-20 mr-20 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero">
          <div className="hero-content text-center">
            <div className="w-full">
              <h1 className="text-5xl text-black font-bold">
                Reverse Engineering Services
              </h1>
              <p className="py-6 max-w-md  ml-24">
                Reverse code engineering of binary files & compiled
                applications, source code recovery, software localization,
                software licensing & copy protection design.
              </p>
              <button className="btn hover:bg-black">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        id="services"
        className="flex items-center  justify-center flex-col  mt-24"
      >
        {/* <!-- main card --> */}

        {/* <!-- headers content--> */}
        <div className="flex flex-col  justify-center items-center text-center">
          <p className="text-3xl pb-4 link-underline link-underline-black font-bold text-sky-500">
            Our<span className="text-black">_Services</span>
          </p>
        </div>

        {/* <!-- subscriptions --> */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
          <div className="bg-[#FFFBEC] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl hover:shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Android App Devlopment</h2>
                <p>Our mobile application is easy to use and </p>
                <p> offers a user-friendly interface that is </p>
                <p>intuitive and simple to navigate....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9ECFF] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Windows App Devlopment</h2>
                <p>Our mobile application is easy to use and </p>
                <p> offers a user-friendly interface that is </p>
                <p>intuitive and simple to navigate....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#ECEEFF] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl  translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Dot net app</h2>
                <p>Our mobile application is easy to use and </p>
                <p> offers a user-friendly interface that is </p>
                <p>intuitive and simple to navigate....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center flex-col  min-h-screen">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
          <div className="bg-[#FFFBEC] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Python</h2>
                <p>Our mobile application is easy to use and </p>
                <p> offers a user-friendly interface that is </p>
                <p>intuitive and simple to navigate....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9ECFF] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Reverse Engineering</h2>
                <p>Reverse engineering, software reversing,</p>
                <p> discover hidden features of binary </p>
                <p> files & compiled applications. ....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#ECEEFF] rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto card card-compact w-96">
              <div className="card-body">
                <h2 className="card-title">Libraries</h2>
                <p>Our mobile application is easy to use and </p>
                <p> offers a user-friendly interface that is </p>
                <p>intuitive and simple to navigate....</p>

                <div className="card-actions justify-end">
                  <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    See details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
            See all Services
          </button>
        </div>
      </div>
      {/* our clinets */}
      <div class="flex flex-col bg-white m-auto p-auto">
      <div className="flex flex-col  justify-center items-center mb-12 text-center">
          <p className="text-3xl pb-4 link-underline link-underline-black font-bold text-sky-500">
            C<span className="text-black">_lients</span>
          </p>
        </div>

        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white
               hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p>Company-01</p>
               </div>
            
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0">
              <p className="text-sky-500  font-semibold text-xl pl-6">
                M<span className="text-black">_ominTech</span>
              </p>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 link-underline link-underline-black ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 link-underline link-underline-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 link-underline link-underline-black ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="link-underline link-underline-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a class="hover:underline">MominTech™</a>. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
