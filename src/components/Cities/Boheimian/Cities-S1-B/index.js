import React from 'react';
import s from "./styles.module.scss"
const CitiesS1B = () => {
    const City = ()=>{
        return(
            <div className={"relative m-auto max-w-[450px] items-center flex flex-col flex justify-center"}>
                <img className={s.img} src="/media/city/1.png" alt=""/>
                <div className=" text-center  text-center">
                   <span className={s.name}>
                        NEW YORK
                   </span>
                </div>
                <div className={s.view_btn}>
                    View City
                </div>
            </div>
        )

    }
    return (
        <div className={"grid grid-cols-2 gap-20 md:grid-cols-3 gap-6 mb-20"}>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS1B;
