import React from 'react';
import s from "./styles.module.scss"
const CitiesS2B = () => {
    const City = ({second})=>{
        return(
            <div className={"relative items-center flex flex-col  flex justify-center"}>
                <img className={s.img} src="/media/city/1.png" alt=""/>
                <div className="absolute w-4/5 p-4 left-0 bg-white text-center  text-center">
                   <div className={s.name}>
                        NEW YORK
                   </div>
                    <div className={s.view_btn}>
                        View City
                    </div>
                </div>

            </div>
        )

    }
    return (
        <div className={"grid md:grid-cols-2 gap-6"}>
            <City/>
            <City second/>
        </div>
    );
};

export default CitiesS2B;
