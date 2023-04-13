import React from 'react';
import s from "./styles.module.scss"
const CitiesS3B = () => {
    const City = ()=>{
        return(
            <div className={"relative h-[500px] md:h-[750px] max-w-[450px] m-auto flex justify-center"}>
                <img className={"w-full h-full object-cover"} src="/media/city/1.png" alt=""/>

                <div className={s.city}>
                    <div className={s.name}>
                        NEW YORK
                    </div>
                    <div className={s.view}>
                        View City
                    </div>
                </div>


            </div>
        )

    }
    return (
        <div className={"p-10 grid  lg:gap-20  gap-6 md:grid-cols-3   mb-20"}>
            <City/>
            <City/>
            <City/>
        </div>
    );
};

export default CitiesS3B;
