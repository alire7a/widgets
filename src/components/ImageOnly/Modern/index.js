import React from 'react';
import style from "./ImageOnlyM.module.scss"
const ImageOnlyM = () => {
    return (
        <div className={"lg:px-[90px] lg:py-[120px] overflow-hidden"}>
            <div className={`flex justify-center items-center h-[590px] lg:h-[400px] rounded-16 ${style.firstImage}`}>
                <h1 className={"font-medium text-darkBorder text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"}>Beyond Design.</h1>
            </div>
            <div className={"relative mt-20 h-[550px] "}>
                <div className={`absolute w-full h-full lg:w-[70%] h-full flex z-10 items-end p-12 rounded-16  ${style.firstImage}`}>
                    <h1 className={"font-medium text-darkBorder text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"}>Beyond Design.</h1>
                </div>
                <div className={"absolute w-full h-[110%] bg-magnolia -top-6 inset-x-1/3 rounded-16"}></div>
            </div>
                <div className={`flex justify-end items-center mt-20 h-[590px] lg:h-[700px] rounded-16 ${style.firstImage}`}>
                <div className={`h-full flex items-end pb-20 lg:mr-24 px-5 lg:px-12 rounded-16 ${style.designBackground}`}>
                    <h1 className={"flex flex-col text-darkBorder lg:flex-row font-medium text-24 leading-[32px] lg:text-40 lg:leading-[53px] tracking-[0.4em]"}><span>Beyond</span> <span>Design.</span> </h1>
                </div>
            </div>
        </div>

    );
};

export default ImageOnlyM;