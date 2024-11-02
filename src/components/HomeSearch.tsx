
function HomeSearch() {
    return (
        <div className="w-[35rem] mt-16">
            <form className="flex items-center w-full mx-auto">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 2C8.686 2 6 4.686 6 8c0 3.333 6 10 6 10s6-6.667 6-10c0-3.314-2.686-6-6-6zM12 12h0"
                            />
                        </svg>
                    </div>
                    <input type="text" id="voice-search"
                        className="bg-gray-50 border border-gray-300 
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-teal-500 focus:border-teal-500 
                            block w-full ps-10 p-2.5 
                            dark:bg-gray-200 dark:border-gray-600 
                            dark:placeholder-gray-700 dark:text-black dark:focus:ring-teal-500 
                            dark:focus:border-teal-500"
                        placeholder="Search by location" required />
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>Search
                </button>
            </form>
        </div>
    )
}

export default HomeSearch