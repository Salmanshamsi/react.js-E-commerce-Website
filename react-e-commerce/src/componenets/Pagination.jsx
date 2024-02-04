import React from 'react'

const Pagination = () => {
  return (
    <div>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm  rounded-md shadow-md">
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight"
                    >
                    Previous
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight "
                    >
                    1
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight "
                    >
                    2
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-300 dark:bg-gray-300 dark:text-white"
                    >
                    3
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight"
                    >
                    4
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight "
                    >
                    5
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight "
                    >
                    Next
                    </a>
                </li>
                </ul>
            </nav>
    </div>
  )
}

export default Pagination