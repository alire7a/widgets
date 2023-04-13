import React from 'react';
import s from "./styles.module.scss"
const CitiesS3M = () => {
    const City = ()=>{
        return(
            <div className={"relative h-[360px] md:h-[600px]  flex justify-center"}>
                <img className={"w-full h-full object-cover"} src="/media/city/1.png" alt=""/>
                <div className={s.view_btn}>
                    <div className={""}>
                        View City
                    </div>
                </div>
                <div className={s.city_name}>
                        NEW YORK
                </div>


            </div>
        )

    }
    return (
        <div className={"grid grid-cols-2 max-w-[1200px] m-auto md:grid-cols-4 "}>
            <City/>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS3M;
