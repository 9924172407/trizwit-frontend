const CustomSearch = () => {
  return (
    <>
      <div className="relative bg-transparent">
        <input
          type="search"
          id="default-search"
          className="block bg-blue-50 w-full p-2 ps-3 text-sm text-blue-600 border border-gray-300 focus:outline-none placeholder:text-blue-600"
          placeholder="Search"
          required
        />

        <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomSearch;
