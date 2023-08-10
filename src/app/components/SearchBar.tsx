
export default function SearchBar() {
    return(
   
 <form>
    <label htmlFor="default-search" className="mb-2 text-sm bg-[#544f50] font-medium text-gray-900 sr-only">Search</label>
    <div className="flex flex-wrap justify-start">
        <div className="pl-4 my-5 absolute flex items-center  pointer-events-none">
            <svg className="w-3 h-3 text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="inline-block w-96 p-4 pl-10 text-sm bg-transparent opacity-15 border-[1px] border-gray-300 text-gray-900 rounded-lg dark:placeholder-gray-200 dark:text-white focus:bg-black" placeholder="Search songs, albums, artists, podcasts" required/>
    </div>
   
</form>
  


)



}