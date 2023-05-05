import React from "react";
import styles from "./HeaderC.module.scss";
import logo from "../../../images/WATERMARK_TheActualized-04 1 (1).svg";
import arrow from "../../../images/icons/arrow-right.svg";

const HeaderM = () => {
  return (
    <>
      <header className={`text-white text-center ${styles.headerBackground}`}>
        <div className={` mx-auto lg:h-[834px]  p-10`}>
          <nav className={`w-full max-w-max mx-auto bg-black lg:px-11 lg:py-[15px] flex justify-between text-white`}>
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
          <div className={`h-[90%] flex mt-[32px] justify-center`}>
             <div className="text-black pt-[70px] w-[50%] pl-[80px] pr-[50px] text-left h-[100%]">
                 <h1 className="font-bold text-[53px] tracking-[.25em] letter-spa mb-[42px] border-l-[20px] pl-[20px]">FIRST FOLD</h1>
                 <p className="font-light text-[#252525] text-[24px] mb-[32px]">Received as a new intake from animal control.
                     Oliver is such a good boy, he is super friendly and will be a wonderful addition to any family. We have begun the intake process. Vet will check him out tomorrow.
                 </p>
                 <div className="w-full flex">
                     <input className="border-1 border-[#363853] placeholder-[#363853] w-full py-4 px-8" type="text" placeholder="City, Neighbourhood, Zip Code"/>
                     <button className="bg-[#363853] p-[20px]">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                             <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                     </button>
                 </div>
                 <div className="mt-[140px] flex justify-between">
                     <div>
                         <p className="font-light text-[24px] text-[#363853]">Properties Sold</p>
                         <p className="font-black text-[36px] text-[#363853]">157 K</p>
                     </div>
                     <div>
                         <p className="font-light text-[24px] text-[#363853]">Properties Registered</p>
                         <p className="font-black text-[36px] text-[#363853]">157 K</p>
                     </div>
                 </div>
             </div>
             <div className={`text-white w-[50%] h-[100%] ${styles.rightBackground}`}>

             </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default HeaderM;
