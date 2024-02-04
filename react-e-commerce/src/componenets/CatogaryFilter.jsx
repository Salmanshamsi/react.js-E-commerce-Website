import React, { useState } from 'react';

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (e) => {
    // Handle checkbox change here
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefault"
        onClick={handleToggle}
        className="bg-indigo-400 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Filter by category
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div id="dropdown" className="absolute z-10 w-56 p-3 bg-white border rounded shadow-lg">
          <h6 className="mb-3 text-sm font-medium">Category</h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 "
                onChange={handleCheckboxChange}
              />
              <label htmlFor="apple" className="ml-2 text-sm font-medium">
                Apple (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="fitbit"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="fitbit" className="ml-2 text-sm font-medium">
                Fitbit (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="dell"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="dell" className="ml-2 text-sm font-medium">
                Dell (56)
              </label>
            </li>
            <li className="flex items-center">
              <input
                id="asus"
                type="checkbox"
                defaultValue=""
                defaultChecked=""
                className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="asus" className="ml-2 text-sm font-medium">
                Asus (97)
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
