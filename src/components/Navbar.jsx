import React from "react";
import logo from "../assets/lawyers insights logo.jpg";


export default function Navbar() {

   

    return (
        <nav className="flex justify-between items-center lg:h-[60px] sm:h-[50px] w-full bg-[#0f5157] text-black pr-1 lg:pr-20 md:pr-14">
            {/* Logo Section */}
            <div
                className="cursor-pointer flex-shrink-0"
               
            >
                <img
                    src={logo}
                    className="h-[60px] sm:h-[50px] lg:h-[60px]"
                    alt="logo"
                />
            </div>

            {/* Title Section */}
            <div className="font-semibold font-sans text-white lg:text-3xl md:text-2xl sm:text-xl cursor-pointer">
                Lawyer Insight
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
                <div
                    className="cursor-pointer font-bold bg-black text-white py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base"
                   
                >
                    Home
                </div>
                {/* <div
                    className="cursor-pointer font-bold bg-white text-black py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base hover:bg-black hover:text-white"
                    onClick={handleBlogsClick}
                >
                    Blogs
                </div> */}
                <a href="https://www.youtube.com/@lawyerinsight">
                    <div className="cursor-pointer font-bold bg-white text-black py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base hover:bg-black hover:text-white">
                        YouTube
                    </div>
                </a>
                {/* <div
                    className="cursor-pointer font-bold bg-red-500 text-white py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base hover:bg-red-700"
                    onClick={handleLogout}
                >
                    Logout
                </div> */}
            </div>
        </nav>
    );
}

/* import React from "react";
import logo from "../assets/lawyers insights logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    function handleHomeClick() {
        navigate("/");
    }

    function handleBlogsClick() {
        navigate("/blogs");
    }

    return (
        <nav className="flex justify-between items-center lg:h-[60px] sm:h-[50px] w-full bg-[#0f5157] text-black  pr-1 lg:pr-20 md:pr-14">
            <div className="cursor-pointer flex-shrink-0">
                <img
                    src={logo}
                    className="h-[60px] sm:h-[50px] lg:h-[60px]"
                    alt="logo"
                />
            </div>
            <div className="font-semibold font-sans text-white lg:text-3xl md:text-2xl sm:text-xl cursor-pointer">
                Lawyer Insight
            </div>

            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
                <div
                    className="cursor-pointer font-bold bg-black text-white py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base "
                    onClick={handleHomeClick}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer font-bold bg-white text-black py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base hover:bg-black hover:text-white "
                    onClick={handleBlogsClick}
                >
                    Blogs
                </div>

                <a href="https://www.youtube.com/@lawyerinsight">
                    <div className="cursor-pointer font-bold bg-white text-black py-1 px-2 sm:py-2 sm:px-3 lg:py-1 lg:px-3 rounded-md text-xs sm:text-sm lg:text-base hover:bg-black hover:text-white">
                        Youtube
                    </div>
                </a>
            </div>
        </nav>
    );
}
 */
