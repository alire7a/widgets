import React from 'react';
import style from "./ImageOnlyB.module.scss";
import image from "../../../images/Rectangle 26.png"
import image2 from "../../../images/Footer (2).svg"
const ImageOnlyB = () => {
    return (
        <div className={`lg:px-[90px] lg:py-[120px] overflow-hidden text-imageOnlyBText ${style.container}`}>
            <div className={`flex flex-col lg:flex-row justify-between items-center`}>
                <div className={`w-full lg:w-[70%]`}>
                    <img src={image} alt="" className={"w-full  rounded-tr-[400px] rounded-br-[400px]"}/>
                </div>
                <h1 className={"font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}>Beyond Design.</h1>
            </div>
            <div className={"mt-20 "}>
                <div className={`flex h-[400px] lg:h-[700px] p-12  ${style.secondImage}`}>
                    <h1 className={"font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}>Beyond Design.</h1>
                </div>
            </div>
                <div className={`flex flex-col lg:flex-row items-center mt-20 mx-8 lg:mx-0`}>
                    <img src={image2} alt=""/>
                    <h1 className={"mx-auto my-5 font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px]"}><span>Beyond</span> <span>Design.</span> </h1>
            </div>
        </div>

    );
};

export default ImageOnlyB;