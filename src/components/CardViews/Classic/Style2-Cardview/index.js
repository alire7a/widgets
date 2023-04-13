import React from 'react';

const Style2Cardview = () => {
    const Card = () =>{
        return(
            <div className={"w-full max-w-[400px] relative"}>
                <img className={"w-full  h-[500px]"} src="/media/cardview/1.png" alt=""/>
                <div className="content p-4 absolute bottom-2 left-2 right-2 bg-white ">
                    <div className="detail absolute right-0 w-[110px] h-10 bg-black top-20 text-white grid place-items-center">
                        Details
                    </div>
                    <div className="flex justify-between w-full mb-2">
                        <h5 className={"card-title"}>11 5152 Canada Way, Burnaby</h5>
                    </div>
                    <div className="flex justify-between w-full mb-4">
                        <div className="card-desc">Keller Williams Realty VanCentral</div>


                    </div>
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <div className="card-price">$ 317,000</div>
                            <div className={"flex items-center gap-2"}>
                                20%
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.99992 7.40497L3.99992 0.594971" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.12313 4.26855L3.9998 7.40522L0.876465 4.26855" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center text-14 gap-2">
                            <span>3 Beds</span>
                            |
                            <span>1 Bath</span>
                            |
                            <span>412 Sqft</span>
                        </div>
                    </div>

                    <div className="name flex justify-between w-full text-[#363853]">
                            Wood Frame, Townhouse
                    </div>

                </div>
            </div>
        )
    }
    return (
        <div className={"w-full grid sm:grid-cols-2 gap-4 p-4 flex-wrap"}>
            <Card/>

        </div>
    );
};

export default Style2Cardview;
