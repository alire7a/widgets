import React from 'react';
import style from './ContactUsC.module.scss'
const ContactUsC = () => {
    return (
        <div className="lg:max-w-max lg:mx-auto lg:px-[90px] lg:py-[120px]">
            <section className={`flex flex-col lg:flex-row items-center py-8 px-4 lg:mt-10 lg:py-10 lg:px-28 ${style.helpSection}`}>
                <div className="lg:w-[70%]">
                    <h5 className="text-24 font-medium lg:text-36 lg:leading-[48px]">How can we help...</h5>
                    <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                <form className="flex flex-col lg:ml-10 lg:w-[30%] mt-10 lg:mt-0" action="src/components">
                    <h5 className="text-24 lg:text-[40px] lg:leading-[53px] text-center mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={style.contactInput} />
                    <input type="email" placeholder="Email ..." className={style.contactInput}/>
                    <textarea className={style.contactInput} placeholder="Your Message ..." id="w3review" name="w3review" rows="4" cols="50">
                        </textarea>
                    <button className={style.contactButton}>SEND</button>
                </form>
            </section>
            <section className={`flex flex-col lg:flex-row items-center mx-4 my-10 py-8 px-4 lg:m-0 lg:mt-10 lg:py-10 lg:px-28 ${style.helpSection}`}>
                <div className="lg:w-[70%]">
                    <h5 className="text-24 font-medium lg:text-36 lg:leading-[48px]">How can we help...</h5>
                    <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                        Lorem ipsum dolor sit amet consectetur. Fringilla maecenas diam aenean duis sit nunc id integer sed. Egestas dictum elementum massa gravida fusce ullamcorper nisl ut non. Viverra et lectus velit interdum lectus arcu feugiat. Leo enim odio ut imperdiet eget. Dui nunc nec in at amet.
                        Enim tortor diam etiam quam. Amet nullam vel faucibus quisque aliquam quis cursus. Purus.
                    </p>
                </div>
                <form className="flex flex-col lg:ml-10 lg:w-[30%] mt-10 lg:mt-0" action="src/components">
                    <h5 className="text-24 lg:text-[40px] lg:leading-[53px] text-center mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={style.contactInput} />
                    <input type="email" placeholder="Email ..." className={style.contactInput}/>
                    <textarea className={style.contactInput} placeholder="Your Message ..." id="w3review" name="w3review" rows="4" cols="50">
                        </textarea>
                    <button className={style.contactButton}>SEND</button>
                </form>
            </section>
            <section className={`flex flex-col lg:flex-row items-center py-8 px-8 lg:mt-10 lg:py-10 lg:px-28 ${style.helpSection}`}>
                <form className="w-full flex flex-col lg:ml-10 lg:w-[30%] mt-10 lg:mt-0 order-2 lg:order-1" action="src/components">
                    <h5 className="text-24 lg:text-[40px] lg:leading-[53px] text-center mb-6">Contact Us</h5>
                    <input type="text" placeholder="Name ..." className={style.contactInput} />
                    <input type="email" placeholder="Email ..." className={style.contactInput}/>
                    <textarea className={style.contactInput} placeholder="Your Message ..." id="w3review" name="w3review" rows="4" cols="50">
                        </textarea>
                    <button className={style.contactButton}>SEND</button>
                </form>
                <div className="w-full lg:w-[70%] border-imageOnlyBText border-b-1 lg:border-b-white lg:border-l-1  lg:ml-16 pb-16 lg:p-16 lg:pr-0 order-1 lg:order-2">
                    <h5 className="text-24 font-medium lg:text-36 lg:leading-[48px]">How can we help...</h5>
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