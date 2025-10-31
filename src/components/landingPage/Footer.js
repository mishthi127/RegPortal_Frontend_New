import React from 'react';
import logo from "../../assets/logo.svg";
import phone from "../../assets/phonecall.svg";
import "../media.css";

export function Footer({ scrollToFAQ, scrollToTestimonials, scrollToComp ,ref }){
    return(
        <div className="h-[890px] bg-transparent flex flex-col" ref={ref}>
            
            <img className="w-[94%] h-auto mb-[3px] lg:mb-[5px] self-center mt-[40px] lg:mt-[80px]" src="/blackfooter.png" alt="blackbar"/>
            <div className="-mb-[9px] lg:-mb-[30px] z-10 flex justify-between">
                <div>
                    <div className="h-[3px] w-[10px] lg:h-[10px] lg:w-[24px] bg-alch-cream"></div>
                    <div className="h-[3px] w-[6px] lg:h-[10px] lg:w-[16px] bg-alch-cream"></div>
                    <div className="h-[3px] w-[3px] lg:h-[10px] lg:w-[8px] bg-alch-cream"></div>
                </div>
                <div className="items-end flex flex-col">
                    <div className="h-[3px] w-[10px] lg:h-[10px] lg:w-[24px] bg-alch-cream"></div>
                    <div className="h-[3px] w-[6px] lg:h-[10px] lg:w-[16px] bg-alch-cream"></div>
                    <div className="h-[3px] w-[3px] lg:h-[10px] lg:w-[8px] bg-alch-cream"></div>
                </div>
            </div>
            <div 
                className="w-full flex-grow bg-alch-dark pixelbg"
            >
                <div
                    className="w-full h-full flex flex-col"
                >
                    <div className="flex flex-col lg:flex-row w-full items-center gap-[75px] justify-around lg:items-start lg:gap-0 mt-[20px] lg:mt-[112px]">
                        <div className=' w-auto flex flex-col items-center lg:items-start'>
                            <div>
                                    <div className='flex flex-row justify-center items-center gap-[10px] h-[69px]'>
                                        <img className="w-[37.99px] h-[43.71px]" src={logo} alt="logo"/>
                                        <div className='text-alch-cream  h-[65.83px] flex flex-col justify-center'>
                                            <p className='font-display font-bold text-[37.99px] h-[42px] leading-none'>ALCHERINGA</p>
                                            <p className='font-sans h-[27px]  font-normal text-[18.99px] leading-none self-end'>IIT GUWAHATI</p>
                                        </div>
                                    </div>    
                            </div>  
                            <div className="  h-[40px] justify-between flex gap-4 mt-[59px]">
                                <a href="https://www.instagram.com/alcheringaiitg/" target="_blank" rel="noopener noreferrer">
                                    <img className='w-[41px] h-[34.17px]  lg:w-[48px] lg:h-[40px] cursor-pointer' src="/insta.png" alt="instagram"  />
                                </a>
   
                                <a href="https://www.youtube.com/@alcheringaIITG/featured" target="_blank" rel="noopener noreferrer">
                                    <img className='w-[41px] h-[34.17px]  lg:w-[48px] lg:h-[40px] cursor-pointer' src="/youtube.png" alt="youtube"  />
                                </a>

                                <a href="https://in.linkedin.com/company/alcheringaiitguwahati" target="_blank" rel="noopener noreferrer">
                                    <img className='w-[41px] h-[34.17px]  lg:w-[48px] lg:h-[40px] cursor-pointer' src="/linkedin.png" alt="linkedin"  />
                                </a>

                                <a href="https://x.com/alcheringaiitg" target="_blank" rel="noopener noreferrer">
                                    <img className='w-[41px] h-[34.17px]  lg:w-[48px] lg:h-[40px] cursor-pointer' src="/x.png" alt="X"  />
                                </a>
   
                            </div>  
                        </div> 
                        <div className="text-alch-cream text-center lg:text-left w-[200px]">
                            <h1 className="h-[35] font-medium text-[32px] leading-[110.00000000000001%] tracking-[0.05em] mb-[24px] lg:mb-[10px]">LINKS</h1>
                            <ul className="h-[95px] font-bold text-sm leading-[140%] tracking-[0.02em]">
                                <button className='mt-[10px] cursor-pointer'>About us</button>
                                <button className='mt-[10px] cursor-pointer' onClick={scrollToComp}>Modules and Competitions</button>
                                <button className='mt-[10px] cursor-pointer' onClick={scrollToTestimonials}>Testimonials</button><br/>
                                <button className='mt-[10px] cursor-pointer' onClick={scrollToFAQ}>FAQs</button>
                            </ul>
                        </div>
                        <div className="text-alch-cream  w-[304px] flex flex-col items-center lg:items-start gap-[60px] lg:gap-0">
                            <h1 className="h-[35] font-medium text-[32px] leading-[110.00000000000001%] tracking-[0.05em] mb-[10px]">CONTACT US</h1>
                            <div className="text-sm leading-[140%] tracking-[0.02em] flex lg:flex-row flex-col justify-between text-center lg:text-left gap-[50px] lg:gap-[20px]">
                                <ul>
                                    <li className="h-[20px] font-bold mb-[10px]">Sudhanshu Raj</li>
                                    <li className='mb-[10px]'>PR Head</li>
                                    <div className='flex flex-row gap-[10px]'><img className='w-[20px] h-[22.52px]' src={phone} alt='phone'/><li className='inline-block'>+91 82929 67325</li></div>
                                </ul>
                                <ul>
                                    <li className="h-[20px] font-bold mb-[10px]">Sidharth Shukla</li>
                                    <li className='mb-[10px]'>PR Head</li>
                                    <div className='flex flex-row gap-[10px]'><img className='w-[20px] h-[22.52px]' src={phone} alt='phone'/><li className='inline-block'>+91 73546 47811</li></div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block mt-[105px] w-auto h-[195px] overflow-hidden mx-auto'>
                        <img className="mx-auto w-[1433px] h-[195px] " src="/footer1.png" alt="footer1"/>
                    </div>
                    <div className='mt-[80px] block lg:hidden h-[85px]  overflow-hidden mx-[15px]'>
                        <img className="mx-auto h-[85px] " src="/mbfooter1.svg" alt="footer1"/>
                    </div>

                    <div className="text-alch-cream text-[10px] lg:text-sm font-normal tracking-[0.02em] leading-[140%] h-[40px] lg:w-[1293px] w-full lg:ml-[79px] mt-[60px] flex justify-center lg:justify-between">
                        <a href="https://alcheringa.co.in/" target="_blank" rel="noopener noreferrer" className="w-full lg:w-[257px] text-center lg:text-left text-alch-cream no-underline">
                            Alcheringa @ 2025. All rights reserved.
                        </a>
                        <div className="hidden lg:flex justify-between w-[339px] h-[40px]">
                            <p>Contact us</p>
                            <p>Feedback</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <img className="w-full h-auto mt-auto" src="/image131footer.png" alt="image131"/>
                </div>
            </div>
        </div>
    )
}