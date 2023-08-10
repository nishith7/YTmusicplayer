"use client"
import { useState } from "react";
// import classNames from 'classnames';
// import { useState } from "react";
// import { Sidenav, initTE } from "tw-elements"

import Categories from "./Categories";

export default function SideBar(){
  // initTE({ Sidenav });
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
    return (

        <div >
        <div className="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>

        <div className="my-10 ml-40">
     <Categories/>
</div>

        <div className="pl-20 flex flex-1">
       
  
</div>
{/* <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    > */}
            <nav
            id='sidenav-4'
            className = {`group fixed left-0 top-0 z-[1035] h-52 w-60 transition-transform 
              // sidebarOpen ? '-translate-x-0' : '-translate-x-full'
              bg-transparent`}>
                 <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
    <li className = {`relative ${expanded ? 'flex' : ''}`}>
    <button
    className="mr-1 mt-6 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
// onClick={toggleSidebar}
   >
    <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
   
    </li>
    <li className="relative">
    <button type="button"className="mt-7 cursor-pointer items-center truncate rounded-[5px] px-4 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"  width="30" height="30"><g className="style-scope yt-icon" fill="#FFFFFF"><path d="M4,10V21h6V15h4v6h6V10L12,3Z" className="style-scope yt-icon" fill="#FFFFFF"></path></g></svg>
<p className="text-white py-1 -ms-1">
    Home
</p>
  <span className="sr-only">Icon description</span>
</button>
    </li>
    <li className="relative">
    <button type="button"className="cursor-pointer items-center truncate rounded-[5px] px-4 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" width="30" height="30"><g className="style-scope yt-icon" fill="#FFFFFF">
        <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z" className="style-scope yt-icon" fill="#FFFFFF"></path></g></svg>
        <p className="text-white py-1 -ms-1.5">
    Explore
</p>
        </button>

    </li>
    <li className="relative">
    <button type="button"className="cursor-pointer items-center truncate rounded-[5px] px-4 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" width="30" height="30"><g className="style-scope yt-icon" fill="#FFFFFF"><path d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z" className="style-scope yt-icon" fill="#FFFFFF"></path></g></svg>
        <p className="text-white py-1 -ms-1.5">
    Library
</p>
        </button>

    </li>
    <li className="relative">
    <button type="button"className="cursor-pointer items-center truncate rounded-[5px] px-4 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" width="30" height="30"><g className="style-scope yt-icon" fill="#FFFFFF"><path d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z" className="style-scope yt-icon" fill="#FFFFFF"></path></g></svg>
    <p className="text-white py-1 -ms-2.5">
    Upgrade
</p>
        </button>

    </li>
</ul>
            </nav>
           </div>
        // </div>
    )
}