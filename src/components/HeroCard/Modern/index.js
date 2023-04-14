import React from 'react';
import style from './HeroCardM.module.scss'
import arrowLeft from '../../../images/icons/arrow-up-small.svg'
import arrowRight from '../../../images/icons/arrow-up-small2.svg'
import house from '../../../images/Rectangle 26.svg'
import arrowDown from '../../../images/icons/Arrow-Down Square blue.svg'
const ContactUsB = () => {
    return (
        <div className="px-5 lg:px-[90px] lg:py-[120px]">
            <section className={style.cardSection}>
                <div className="mt-16">
                    <div className="flex justify-center items-center py-10">
                        <button className={`${style.arrowBtn} mr-10 lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className="font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] px-4">Sold Properties</h3>
                        <button className={`${style.arrowBtn} ml-10 lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:px-10 pb-10">
                    <div className="w-full lg:w-auto ">
                        <img src={house} alt="" className="w-full lg:w-auto rounded-2xl" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 flex flex-col items-center  ">
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`${style.priceTag} mt-10`}>
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>

            <section className={style.cardSection}>
                <div className="mt-16">
                    <div className="flex items-center justify-center ">
                        <button className={`${style.arrowBtn} mr-10 lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                        <button className={`${style.arrowBtn} ml-10 lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col lg:flex-row lg:justify-end items-center mt-10 rounded-xl lg:p-5 ${style.backgroundSectionFirst}`}>
                    <div className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto lg:rounded-xl flex flex-col items-center ${style.content}`}>
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`${style.priceTag}  mt-10`}>
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
            <section className={style.cardSection}>
                <div className="flex mx-10 items-center justify-between translate-y-[115%] lg:translate-y-full">
                    <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[40px] p-4 lg:p-5 rounded-xl bg-[#fff]`}>Sold Properties</h3>
                    <div className="flex">
                        <button className={`${style.arrowBtn} mr-2`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <button className={`${style.arrowBtn} ml-2`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col lg:flex-row lg:justify-center items-center mt-10 rounded-xl lg:p-5 ${style.backgroundSectionSecond}`}>
                    <div className={`p-4 lg:p-10 mt-60 lg:mt-0 w-full lg:w-auto lg:rounded-xl flex flex-col items-center ${style.content}`}>
                        <h4 className="font-bold text-[24px] leading-[24px] lg:text-[36px] lg:leading-[41px]">11 5152 Canada Way, Burnaby</h4>
                        <h5 className="text-[18px] leading-[26px] lg:text-[24px] lg:leading-[35px]">Keller Williams Realty VanCentral</h5>
                        <div className={`${style.priceTag}  mt-10`}>
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsB;