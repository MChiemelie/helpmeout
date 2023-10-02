import React from 'react'
import { Display } from '.';

export default function Dashboard() {
    return (
        <div>
            <div className="py-8 lg:py-10 space-y-16 w-full border-b border-gray-300">
                <nav className="mx-auto flex items-center justify-between px-[5%] text-[#120B48]">
                    <div className="flex items-center gap-2 text-2xl font-bold">
                        <img src='logo.svg'/>
                        HelpMeOut
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded text-base md:text-xl font-semibold">
                        <img src="profile.svg" alt="" />
                        John Mark
                        <img src="arrow.svg" alt="" />
                    </div>
                </nav>
                <div className="flex justify-between gap-[3%] px-[4%] items-start">
                    <div>
                        <h2 className='sora text-2xl sm:text-4xl'>Hello, John Mark</h2>
                        <p className='text-base sm:text-xl font-medium text-gray-500'>Here are your recorded videos</p>
                    </div>
                    <div className="flex items-center w-3/5 md:w-2/5">
                        <div className="w-full relative">
                            <input type="search" placeholder="Search for a particular video"
                                className="bg-gray-200 rounded-2xl placeholder:text-gray-400 placeholder:text-lg text-md font-meduim bg-opacity-40 border-2 px-12 md:px-16 py-3 md:py-5 w-full"
                            />
                            <button className="flex gap-2 p-2 text-sm rounded w-fit self-center absolute top-1 md:top-4 left-3">
                                <img src='search.svg' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Display />
        </div>
    )
}