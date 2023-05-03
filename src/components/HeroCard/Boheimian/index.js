import React from 'react';
import style from './HeroCardB.module.scss'
import arrowLeft from '../../../images/icons/arrow-up.svg'
import arrowRight from '../../../images/icons/arrow-right.svg'
import house from '../../../images/Rectangle 2.svg'
import arrowDown from '../../../images/icons/Arrow - Down Square.svg'
const ContactUsB = () => {
    return (
        <>
            <section className={style.cardSection}>
                <div className="my-16">
                    <div className="flex justify-center items-center ">
                        <button className={`mr-10 lg:mr-28`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                        <button className={`ml-10 lg:ml-28`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className="max-w-max mx-auto flex flex-col lg:flex-row lg:items-center pr-4 ">
                    <div className={``}>
                        <img src={house} alt="" className="w-full h-full lg:w-auto rounded-tr-[280px] rounded-br-[280px]" />
                    </div>
                    <div className="lg:ml-16 mt-8 lg:mt-0 p-4 lg:p-0">
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`${style.priceTag} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}>
                            <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                            <span className="flex items-center">
                                <span className={style.off}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                        </div>
                        <div className={style.line}></div>
                        <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 412 Sqft</p>
                        <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${style.type}`} >
                            <span>Type </span>
                            Single Family
                            <span className="ml-8">Land Size </span>
                            5,110,412 sqft
                        </p>
                        <div className="flex justify-center">
                            <a href="" className={style.listing}>VIEW LISTING</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className=" lg:py-[120px]">

                <section className={style.cardSection}>
                    <div className="my-16">
                        <div className="flex justify-center items-center ">
                            <button className={`mr-10 lg:mr-28`}>
                                <img src={arrowLeft} alt="arrow"/>
                            </button>
                            <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                            <button className={`ml-10 lg:ml-28`}>
                                <img src={arrowRight} alt="arrow"/>
                            </button>
                        </div>
                    </div>
                    <div className={`max-w-max mx-auto flex flex-col lg:flex-row lg:justify-end items-center p-4 lg:p-5 ${style.backgroundSectionFirst}`}>
                        <div className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto ${style.content}`}>
                            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                            <div className={`${style.priceTag} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}>
                                <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                                <span className="flex items-center">
                                <span className={style.off}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                            </div>
                            <div className={style.line}></div>
                            <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 412 Sqft</p>
                            <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${style.type}`} >
                                <span>Type </span>
                                Single Family
                                <span className="ml-8">Land Size </span>
                                5,110,412 sqft
                            </p>
                            <div className="flex justify-center">
                                <a href="" className={style.listing}>VIEW LISTING</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.cardSection}>
                    <div className="flex mx-10 my-16 items-center justify-center translate-y-1/2">
                        <div className="flex justify-center items-center ">
                            <button className={`mr-10 lg:mr-28`}>
                                <img src={arrowLeft} alt="arrow"/>
                            </button>
                            <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                            <button className={`ml-10 lg:ml-28`}>
                                <img src={arrowRight} alt="arrow"/>
                            </button>
                        </div>
                    </div>
                    <div className={`max-w-max mx-auto  flex flex-col lg:flex-row lg:justify-end py-5 items-center px-4 lg:px-12 ${style.backgroundSectionSecond}`}>
                        <div className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto ${style.content}`}>
                            <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                            <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                            <div className={`${style.priceTag} w-[246px] h-[53px] lg:w-[278px] lg:h-[61px] mt-10`}>
                                <span className="font-medium text-[32px] leading-[29px] lg:text-[40px] lg:leading-[37px]">$ 317,000</span>
                                <span className="flex items-center">
                                <span className={style.off}>20%</span>
                                <img src={arrowDown} alt="arrow down"/>
                            </span>
                            </div>
                            <div className={style.line}></div>
                            <p className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[29px] tracking-wider">3 Beds | 1 Bath | 412 Sqft</p>
                            <p className={`text-[18px] leading-[22px] lg:text-[24px] lg:leading-[29px] ${style.type}`} >
                                <span>Type </span>
                                Single Family
                                <span className="ml-8">Land Size </span>
                                5,110,412 sqft
                            </p>
                            <div className="flex justify-center">
                                <a href="" className={style.listing}>VIEW LISTING</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default ContactUsB;
