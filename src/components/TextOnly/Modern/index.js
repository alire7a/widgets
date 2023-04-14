import React from 'react';
import style from "./TextOnlyM.module.scss"
const TextOnlyC = () => {
    return (
        <div className={`lg:px-[90px] lg:py-[120px] ${style.container}`}>
            <div className="w-full bg-purple text-center mb-16 py-11 text-white px-8 lg:px-0 rounded-16">
                <p className={"text-16 leading-[21px]"}>About</p>
                <div className={"border-1 border-white w-4/5 lg:w-4/12 m-auto my-6"}></div>
                <p className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                    Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                    Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between bg-purple mb-16 px-20 py-11 text-white rounded-16">
                <div className={"w-full lg:w-1/2"}>
                    <p className={"text-16 leading-[21px] lg:text-36 lg:leading-[48px] mb-6 tracking-[0.235em]"}>ABOUT</p>
                    <p className={"text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                {/*responsive for mobile*/}
                <span className="font-medium  lg:text-96 lg:leading-[128px] lg:tracking-[0.415em] opacity-20 lg:self-end mt-10 lg:mt-0">ABOUT</span>
            </div>
            <div className="w-full text-center mb-16 py-11 px-8 lg:px-0">
                <p className={"text-16 leading-[21px]"}>About</p>
                <div className={"border-1 border-grayBorder w-4/5 lg:w-4/12 m-auto my-6"}></div>
                <p  className={"lg:w-7/12 m-auto text-14 leading-[19px]"}>Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                    Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                    Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                </p>
            </div>
        </div>
    );
};

export default TextOnlyC;