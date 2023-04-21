import React from 'react';
import style from './HeroCardC.module.scss'
import arrowLeft from '../../../images/icons/arrow-up.svg'
import arrowRight from '../../../images/icons/arrow-right.svg'
import house from '../../../images/Rectangle 26.svg'
import arrowDown from '../../../images/icons/Arrow - Down Square.svg'
const ContactUsB = () => {
    return (
        <div className="lg:px-[90px] lg:py-[120px]">
            <section className={style.cardSection}>
                <div className="mt-16">
                    <div className="w-full border-1 border-t border-[#545650]"></div>
                    <div className="flex justify-center items-center -translate-y-1/2">
                        <button className={`${style.arrowBtn} mr-10 lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                        <button className={`${style.arrowBtn} ml-10 lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center px-4 ">
                    <div className={`w-full lg:w-auto`}>
                        <img src={house} alt="" className="w-full lg:w-auto " />
                    </div>
                    <div className="lg:pl-8 mt-8 lg:mt-0">
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
            <section className={style.cardSection}>
                <div className="mt-16">
                    <div className="w-full border-1 border-t border-[#545650]"></div> {/* fix */}
                    <div className="flex justify-around lg:justify-start lg:ml-10 items-center -translate-y-1/2">
                        <button className={`${style.arrowBtn}  lg:mr-5`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[46px] px-4 bg-[#fff]`}>Sold Properties</h3>
                        <button className={`${style.arrowBtn} lg:ml-5`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col h-[400px] lg:h-full lg:flex-row lg:justify-end items-center mx-4 p-0 lg:p-5 ${style.backgroundSection}`}>
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
            <section className={`mt-72 mb-72 lg:my-16 ${style.cardSection}`}>
                <div className="flex mx-10 items-center justify-between translate-y-1/2 ">
                    <h3 className={`font-bold text-[24px] leading-[28px] lg:text-[64px] lg:leading-[74px] p-5 bg-[#fff]`}>Sold Properties</h3>
                    <div className="flex">
                        <button className={`${style.arrowBtn} mr-2`}>
                            <img src={arrowLeft} alt="arrow"/>
                        </button>
                        <button className={`${style.arrowBtn} ml-2`}>
                            <img src={arrowRight} alt="arrow"/>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col h-[400px] lg:h-[500px] lg:flex-row lg:justify-end py-5 items-center mx-4 lg:px-12 ${style.backgroundSection}`}>
                    <div className={`p-4 lg:p-10 mt-60 lg:mt-[480px] w-full lg:w-auto ${style.content}`}>
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
                        <a href="" className={style.listing}>VIEW LISTING</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsB;