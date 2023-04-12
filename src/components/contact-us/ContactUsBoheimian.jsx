import React from 'react';
import style from '../../styles/contact-us/ContactUsBoheimian.module.scss'
const ContactUsC = () => {
    return (
        <div className="lg:px-[90px] lg:py-[120px]">
            <div className="hidden lg:block">
                <h1 className={style.title}>STYLE 1</h1>
                <p className={style.subTitleText}>Classic View | Clean | Focus on Image</p>
            </div>
            <section className={`flex flex-col lg:flex-row items-center py-8 px-4 lg:mt-10 lg:py-10 lg:px-28 ${style.helpSection}`}>
                <div className="lg:w-[70%]">
                    <h5 className={`font-medium text-[36px] leading-[65px] ${style.help}`}>How can we help...</h5>
                    <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                <form className="flex flex-col lg:ml-10 w-full   lg:w-[30%] mt-10 lg:mt-0" action="src/components">
                        <h5 className="text-2xl lg:text-[40px] lg:leading-[53px] mb-6">Contact Us</h5>
                        <input type="text" placeholder="Name ..." className={style.contactInput} />
                        <input type="email" placeholder="Email ..." className={style.contactInput}/>
                        <input type="email" placeholder="Your Message ..." className={style.contactInput}/>
                        <button className={style.contactButton}>SEND</button>
                </form>
            </section>
            <div className="hidden lg:block mt-10">
                <h1 className={style.title}>STYLE 2</h1>
                <p className={style.subTitleText}>Classic View | Clean | Focus on Image</p>
            </div>
            <section className={`w-full px-16  ${style.helpSection}`}>
                <form className=" lg:w-[40%] mx-auto flex flex-col px-16 mt-10 lg:mt-0" action="src/components">
                        <h5 className="text-2xl lg:text-[40px] lg:leading-[53px] text-center mb-6">Contact Us</h5>
                        <input type="text" placeholder="Name ..." className={style.contactInput} />
                        <input type="email" placeholder="Email ..." className={style.contactInput}/>
                        <input type="email" placeholder="Your Message ..." className={style.contactInput}/>
                        <button className={style.contactButton}>SEND</button>
                </form>
            </section>
            <div className="hidden lg:block mt-10">
                <h1 className={style.title}>STYLE 3</h1>
                <p className={style.subTitleText}>Classic View | Clean | Focus on Image</p>
            </div>
            <section className={`flex flex-col lg:flex-row items-center py-8 px-8 lg:mt-10 lg:py-10 lg:px-28 ${style.helpSection}`}>
                <form className="w-full flex flex-col lg:ml-10 lg:w-[30%] mt-10 lg:mt-0 order-2 lg:order-1" action="src/components">
                    <h5 className="text-2xl lg:text-[40px] lg:leading-[53px]  mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={style.contactInput} />
                    <input type="email" placeholder="Email ..." className={style.contactInput}/>
                    <input type="email" placeholder="Your Message ..." className={style.contactInput}/>
                    <button className={style.contactButton}>SEND</button>
                </form>
                <div className="hidden lg:block h-6 border border-[#D8D8D8] order-2 mx-16"></div>
                <div className="w-full lg:w-[70%] border-[#545650] border-b lg:border-0 pb-16 order-1 lg:order-2">
                    <h5 className={`font-medium text-[36px] leading-[65px] ${style.help}`}>How can we help...</h5>
                    <p className="text-sm mt-6 ">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default ContactUsC;