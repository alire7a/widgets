import React from 'react';
import styles from "./HeaderC.module.scss";
import logo from "../../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../../images/icons/arrow-right.svg";

const HeaderS12C = () => {
    return (
        <header className={`text-white text-center  ${styles.headerBackground}  `}>
            <div className={`lg:h-[834px] p-10`}>
                <nav className={`w-full max-w-max mx-auto lg:px-11 lg:py-[15px] flex justify-between`}>
                    <ul className={`hidden lg:flex list-none items-center child:pr-6`}>
                        <li>
                            <img src={logo} alt="logo" />
                        </li>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Plans</li>
                        <li>Solutions</li>
                        <li>Contact</li>
                    </ul>
                    <span className={`flex flex-col items-end`}>
              <a href="tel:+1 443 456 1220">+1 443 456 1220</a>
              <a href="mailto:info@TheActualized.com">info@TheActualized.com</a>
            </span>
                </nav>
                <div className={`h-[90%] flex flex-col justify-center`}>
                    <h1
                        className={`font-bold lg:text-64 lg:leading-[85px] lg:tracking-[0.27em]`}
                    >
                        FIRST FOLD
                    </h1>
                    <h2
                        className={`font-light lg:text-36 lg:leading-[42px] lg:tracking-[-0.04em] ${styles.des}`}
                    >
                        A Short Description Can be Written Here
                    </h2>
                    <div className={`mt-8 flex justify-center`}>
                        <input
                            type="text"
                            className={`w-[36%] bg-transparent text-white placeholder:text-white py-4 px-8 border-1 border-white`}
                            placeholder="City, Neighbourhood, Zip Code"
                        />
                        <button className={`bg-white`}>
                            <img className={`p-5`} src={arrow} alt="arrow" />
                        </button>
                    </div>
                    <div className={`flex justify-center text-left mt-16`}>
              <span className={`flex flex-col mr-20`}>
                <span className={`text-24 leading-[32px]`}>
                  Properties Sold
                </span>
                <span className={`font-black lg:font-36 leading-[48px]`}>
                  157 <span className={`mb-1`}>K</span>
                </span>
              </span>
                        <span className={`flex flex-col`}>
                <span className={`text-24 leading-[32px]`}>
                  Properties Registered
                </span>
                <span className={`font-black lg:font-36 leading-[48px]`}>
                  157 <span className={`mb-1`}>K</span>
                </span>
              </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderS12C;
