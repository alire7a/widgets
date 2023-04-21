import React from 'react';
import style from "./FooterB.module.scss"
import logo from "../../../images/WATERMARK_TheActualized-04 1 black.svg"
const FooterB = () => {
    return (
        <>
            <footer className={` ${style.container}`}>
                <div className={"mx-auto max-w-max flex flex-col lg:flex-row justify-center lg:justify-between p-4 lg:p-12"}>
                    <div className={"lg:w-1/4 pr-16 border-r-1 border-gray-medium  "}>
                        <h4 className={"text-16 leading-[21px] mb-4"}>Quick Access Menu</h4>
                        <div className={"flex px-5 justify-between "}>
                            <ul className={`child:mb-4 text-14 leading-[18px]`}>
                                <li>Home</li>
                                <li>Projects</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Soultions</li>
                            </ul>
                            <ul className={`child:mb-4 text-14 leading-[18px]`}>
                                <li>Projects</li>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Soultions </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"lg:w-1/4 border-r-1 border-gray-medium pr-16"}>
                        <h4 className={"text-16 leading-[21px] mb-4"}>About</h4>
                        <p className={"mt-6 text-14 leading-[18px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.</p>
                    </div>
                    <div className={"lg:w-1/4 "}>
                        <h4 className={"text-16 leading-[21px] mb-4"}>Contact</h4>
                        <p className={`mt-6 text-16 leading-[19px] font-light ${style.phone}`}>Phone Number</p>
                        <p className={"text-16 leading-[19px]"}>+1 443 456 1220</p>
                        <p className={`mt-6 text-16 leading-[19px] mt-6 font-light  ${style.phone}`}>Email</p>
                        <p className={"text-16 leading-[19px] underline underline-offset-1"}>info@TheActualized.com</p>
                    </div>
                    <div className={'self-center'}>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <p className={'py-2 border-y-1 border-gray-medium text-center'}>Designed by TheActulized.com</p>
            </footer>
            <footer className={`${style.container}`}>
                <nav className={"pr-16 border-y-1 border-gray-medium bg-white text-black lg:px-12"}>
                <ul className={`child:my-4 w-full flex justify-between text-14 leading-[18px]`}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Soultions</li>
                    <li>Projects</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Soultions </li>
                    <li>Contact Us</li>
                </ul>
            </nav>
                <div className={"mx-auto max-w-max flex flex-col lg:flex-row justify-center lg:justify-between  p-4 lg:p-12"}>
                    <div className={"lg:w-1/4 mr-16"}>
                        <h4 className={"text-16 leading-[21px]"}>About</h4>
                        <p className={"mt-6 text-14 leading-[18px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.</p>
                    </div>
                    <div className={"lg:w-1/4 mr-16"}>
                        <h4 className={"text-16 leading-[21px]"}>Contact</h4>
                        <p className={`mt-6 text-16 leading-[19px] font-light ${style.phone}`}>Phone Number</p>
                        <p className={"text-16 leading-[19px]"}>+1 443 456 1220</p>
                        <p className={`mt-6 text-16 leading-[19px] mt-6 font-light  ${style.phone}`}>Email</p>
                        <p className={"text-16 leading-[19px] underline underline-offset-1"}>info@TheActualized.com</p>
                    </div>
                    <div className={`lg:w-1/4`}>
                        map
                    </div>
                    <div className={''}>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <p className={'py-2 border-y-1 border-gray-medium text-center'}>Designed by TheActulized.com</p>
            </footer>
            <footer className={`bg-footerBgC   ${style.container3}`}>
                <nav className={"pr-16 border-y-1 border-gray-medium text-black lg:px-12"}>
                    <ul className={`child:my-4 w-full flex justify-between text-14 leading-[18px]`}>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Soultions</li>
                        <li>Projects</li>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Soultions </li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div className={"mx-auto max-w-max flex flex-col lg:flex-row justify-center lg:justify-between  p-4 lg:p-12"}>
                    <div className={"lg:w-1/4 mr-16"}>
                        <h4 className={"text-16 leading-[21px]"}>About</h4>
                        <p className={"mt-6 text-14 leading-[18px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                            Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.</p>
                    </div>
                    <div className={"lg:w-1/4 mr-16"}>
                        <h4 className={"text-16 leading-[21px]"}>Contact</h4>
                        <p className={`mt-6 text-16 leading-[19px] font-light ${style.phone}`}>Phone Number</p>
                        <p className={"text-16 leading-[19px]"}>+1 443 456 1220</p>
                        <p className={`mt-6 text-16 leading-[19px] mt-6 font-light  ${style.phone}`}>Email</p>
                        <p className={"text-16 leading-[19px] underline underline-offset-1"}>info@TheActualized.com</p>
                    </div>
                    <div className={`lg:w-1/4`}>map</div>
                    <div className={'mx-auto lg:m-0'}>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <p className={'py-2 border-y-1 border-gray-medium text-center'}>Designed by TheActulized.com</p>
            </footer>
        </>

    );
};

export default FooterB;