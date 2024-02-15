export default function Search() {
    return (<>
        <div className="border-b bg-white">
            <form className="max-w-md mx-auto ">
                <div className="flex  py-3 ">
                    <label htmlFor="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <div className="relative w-full">
                        <input type="search" id="location-search" className="block p-5 py-3 w-full z-20 text-sm  focus:ring-gray-200 focus:border-gray-200 border rounded-full" placeholder="Search for city or address" required />
                        <button type="submit" className="absolute top-2 end-3 h-full max-h-8 p-2 px-2 text-sm font-medium text-white bg-primary rounded-full  ">
                            <svg className="w-[16px] h-[16px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>);

}