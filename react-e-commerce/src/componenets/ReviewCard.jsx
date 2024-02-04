import React from 'react'
import {useSelector} from "react-redux"

const ReviewCard = () => {

    const data = [1,1,1,1]
    const mode = useSelector((state) => state.ModesHandler.value)
    

  return (
    <>

        {data?.map((ele,index)=>{
            return(<>
                
                <article className={`shadow-md ${mode?"text-gray-00 border-gray-100 bg-gray-100":"bg-gray-800 border-gray-900 text-white"}  p-6 text-base border rounded-md  `}>
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm  font-semibold">
                                <img
                                className="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough"
                                />
                                Michael Gough
                            </p>
                            <p className="text-sm ">
                                <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                                Feb. 8, 2022
                                </time>
                            </p>
                            </div>
                            <button
                            id="dropdownComment1Button"
                            data-dropdown-toggle="dropdownComment1"
                            className="inline-flex items-center p-2 text-sm font-medium text-center  focus:ring-4 focus:outline-none "
                            type="button"
                            >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 3"
                            >
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                            <span className="sr-only">Comment settings</span>
                            </button>
                            {/* Dropdown menu */}
                            <div
                            id="dropdownComment1"
                            className="hidden z-10 w-36rounded divide-y  shadow "
                            >
                            <ul
                                className="py-1 text-sm "
                                aria-labelledby="dropdownMenuIconHorizontalButton"
                            >
                                <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 "
                                >
                                    Edit
                                </a>
                                </li>
                                <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 "
                                >
                                    Remove
                                </a>
                                </li>
                                <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 "
                                >
                                    Report
                                </a>
                                </li>
                            </ul>
                            </div>
                        </footer>
                        <p className="">
                            Very straight-to-point article. Really worth time reading. Thank you!
                            But tools are just the instruments for the UX designers. The knowledge
                            of the design tools are as important as the creation of the design
                            strategy.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                        <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                </div>

                        </div>
                </article>

            </>)
        })}

    </>
  )
}

export default ReviewCard


