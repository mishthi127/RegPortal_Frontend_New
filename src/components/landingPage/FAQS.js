import { useState, forwardRef } from "react"
import flower from "../../assets/heading-icon-red.svg"
import ClickSpark from "../../animation/ClickSpark";

export const FAQS = forwardRef((props, ref) => {
    const [openindex, setOpenindex] = useState([]);
    const invert = (index) => {
        if (openindex.includes(index)) {
            setOpenindex(openindex.filter(i => i !== index));
        } else {
            setOpenindex([...openindex, index]);
        }
    }


    return(
        <div className="h-auto w-full  flex flex-col" ref={ref}>
            <div className=" flex justify-center items-center mt-[20px] gap-[10px]  text-center font-display text-4xl sm:text-5xl font-extrabold text-alch-dark">
                
                    <img src={flower} alt="red"/>
                    FAQS
                    <img src={flower} alt="red"/>
            </div>
            <div className="flex items-center justify-center">
                <div 
                    className="bg-transparent flex flex-col flex-1 items-center  mt-[80px]  gap-[15px]"
                >   
                    <div className="w-[970px] hidden lg:block">
                        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                                <div 
                                    className="w-full lg:h-[60px] h-[81px] flex justify-between items-center"
                                    style={{
                                        backgroundImage: "url('/faqbar.png')",
                                        backgroundSize: "contain",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}  
                                    onClick={()=>{invert(1);}}  
                                >
                                    <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-sm tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                    <img
                                        src="/downup.png"
                                        alt="toggle"
                                        className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                            openindex.includes(1) ? "rotate-180" : "rotate-0"
                                        }`}
                                        onClick={() => invert(1)}
                                    />
                                </div>
                        </ClickSpark>
                        {   <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openindex.includes(1) ? "max-h-[200px] opacity-100 mt-[-12px]" : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/popfaqbar.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[99px]">
                                    <p className="font-normal text-sm tracking-[0.02em] leading-[140%] w-[899px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="lg:hidden flex flex-col items-center">
                            <div 
                                className="w-[340px] h-[75px] max-sm:w-[270px] max-sm:h-[60px] md:w-[65%] md:h-[85px] flex justify-between items-center"
                                style={{
                                    backgroundImage: "url('/mbfaqbg.svg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}  
                                onClick={()=>{invert(1);}}  
                            >
                                <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-[13px] tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                <img
                                    src="/downup.png"
                                    alt="toggle"
                                    className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                        openindex.includes(1) ? "rotate-180" : "rotate-0"
                                    }`}
                                    onClick={() => invert(1)}
                                />
                            </div>
                        {   <div
                                className={`transition-all w-[340px] h-[132px] max-sm:w-[270px] max-sm:h-[105px] md:w-[65%] md:h-[165px] duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
                                    openindex.includes(1) ? "h-[145px] opacity-100 mt-[-25px] " : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/mbfaqansbg.svg')",
                                    //backgroundSize: "contain",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[110px]">
                                    <p className="font-normal text-[13px] tracking-[0.02em] leading-[140%] w-[300px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    {/* 2 */}
                    <div className="w-[970px] hidden lg:block">
                        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                            <div 
                                className="w-full lg:h-[60px] h-[81px] flex justify-between items-center"
                                style={{
                                    backgroundImage: "url('/faqbar.png')",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}  
                                onClick={()=>{invert(2);}}  
                            >
                                <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-sm tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                <img
                                    src="/downup.png"
                                    alt="toggle"
                                    className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                        openindex.includes(2) ? "rotate-180" : "rotate-0"
                                    }`}
                                    onClick={() => invert(2)}
                                />
                            </div>
                        </ClickSpark>
                        {   <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openindex.includes(2) ? "max-h-[200px] opacity-100 mt-[-12px]" : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/popfaqbar.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[99px]">
                                    <p className="font-normal text-sm tracking-[0.02em] leading-[140%] w-[899px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="lg:hidden flex flex-col items-center">
                        <div 
                            className="w-[340px] h-[75px] max-sm:w-[270px] max-sm:h-[60px] md:w-[65%] md:h-[85px] flex justify-between items-center"
                            style={{
                                backgroundImage: "url('/mbfaqbg.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}  
                            onClick={()=>{invert(2);}}  
                        >
                            <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-[13px] tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                            <img
                                src="/downup.png"
                                alt="toggle"
                                className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                    openindex.includes(2) ? "rotate-180" : "rotate-0"
                                }`}
                                onClick={() => invert(2)}
                            />
                        </div>
                        {   <div
                                className={`transition-all w-[340px] h-[132px] max-sm:w-[270px] max-sm:h-[105px] md:w-[65%] md:h-[165px] duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
                                    openindex.includes(2) ? "h-[145px] opacity-100 mt-[-25px] " : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/mbfaqansbg.svg')",
                                    //backgroundSize: "contain",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[110px]">
                                    <p className="font-normal text-[13px] max-sm:text-[10px] break-words tracking-[0.02em] leading-[140%] w-[300px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    {/* 3 */}
                    <div className="w-[970px] hidden lg:block">
                        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                            <div 
                                className="w-full lg:h-[60px] h-[81px] flex justify-between items-center"
                                style={{
                                    backgroundImage: "url('/faqbar.png')",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}  
                                onClick={()=>{invert(3);}}  
                            >
                                <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-sm tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                <img
                                    src="/downup.png"
                                    alt="toggle"
                                    className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                        openindex.includes(3) ? "rotate-180" : "rotate-0"
                                    }`}
                                    onClick={() => invert(3)}
                                />
                            </div>
                        </ClickSpark>
                        {   <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openindex.includes(3) ? "max-h-[200px] opacity-100 mt-[-12px]" : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/popfaqbar.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[99px]">
                                    <p className="font-normal text-sm tracking-[0.02em] leading-[140%] w-[899px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="lg:hidden flex flex-col items-center">
                        <div 
                            className="w-[340px] h-[75px] max-sm:w-[270px] max-sm:h-[60px] md:w-[65%] md:h-[85px] flex justify-between items-center"
                            style={{
                                backgroundImage: "url('/mbfaqbg.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}  
                            onClick={()=>{invert(3);}}  
                        >
                            <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-[13px] tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                            <img
                                src="/downup.png"
                                alt="toggle"
                                className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                    openindex.includes(3) ? "rotate-180" : "rotate-0"
                                }`}
                                onClick={() => invert(3)}
                            />
                        </div>
                        {   <div
                                className={`transition-all w-[340px] h-[132px] max-sm:w-[270px] max-sm:h-[105px] md:w-[65%] md:h-[165px] duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
                                    openindex.includes(3) ? "h-[145px] opacity-100 mt-[-25px] " : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/mbfaqansbg.svg')",
                                    //backgroundSize: "contain",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[110px]">
                                    <p className="font-normal text-[13px] tracking-[0.02em] leading-[140%] w-[300px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    {/* 4 */}
                    <div className="w-[970px] hidden lg:block">
                        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                            <div 
                                className="w-full lg:h-[60px] h-[81px] flex justify-between items-center"
                                style={{
                                    backgroundImage: "url('/faqbar.png')",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}  
                                onClick={()=>{invert(4);}}  
                            >
                                <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-sm tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                <img
                                    src="/downup.png"
                                    alt="toggle"
                                    className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                        openindex.includes(4) ? "rotate-180" : "rotate-0"
                                    }`}
                                    onClick={() => invert(4)}
                                />
                            </div>
                        </ClickSpark>
                        {   <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openindex.includes(4) ? "max-h-[200px] opacity-100 mt-[-12px]" : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/popfaqbar.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[99px]">
                                    <p className="font-normal text-sm tracking-[0.02em] leading-[140%] w-[899px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="lg:hidden flex flex-col items-center">
                        <div 
                            className="w-[340px] h-[75px] max-sm:w-[270px] max-sm:h-[60px] md:w-[65%] md:h-[85px] flex justify-between items-center"
                            style={{
                                backgroundImage: "url('/mbfaqbg.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}  
                            onClick={()=>{invert(4);}}  
                        >
                            <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-[13px] tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                            <img
                                src="/downup.png"
                                alt="toggle"
                                className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                    openindex.includes(4) ? "rotate-180" : "rotate-0"
                                }`}
                                onClick={() => invert(4)}
                            />
                        </div>
                        {   <div
                                className={`transition-all w-[340px] h-[132px] max-sm:w-[270px] max-sm:h-[105px] md:w-[65%] md:h-[165px] duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
                                    openindex.includes(4) ? "h-[145px] opacity-100 mt-[-25px] " : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/mbfaqansbg.svg')",
                                    //backgroundSize: "contain",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[110px]">
                                    <p className="font-normal text-[13px] tracking-[0.02em] leading-[140%] w-[300px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    {/* 5 */}
                    <div className="w-[970px] hidden lg:block">
                        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                            <div 
                                className="w-full lg:h-[60px] h-[81px] flex justify-between items-center"
                                style={{
                                    backgroundImage: "url('/faqbar.png')",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}  
                                onClick={()=>{invert(5);}}  
                            >
                                <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-sm tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                                <img
                                    src="/downup.png"
                                    alt="toggle"
                                    className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                        openindex.includes(5) ? "rotate-180" : "rotate-0"
                                    }`}
                                    onClick={() => invert(5)}
                                />
                            </div>
                        </ClickSpark>
                        {   <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openindex.includes(5) ? "max-h-[200px] opacity-100 mt-[-12px]" : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/popfaqbar.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[99px]">
                                    <p className="font-normal text-sm tracking-[0.02em] leading-[140%] w-[899px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="lg:hidden flex flex-col items-center">
                        <div 
                            className="w-[340px] h-[75px] max-sm:w-[270px] max-sm:h-[60px] md:w-[65%] md:h-[85px] flex justify-between items-center"
                            style={{
                                backgroundImage: "url('/mbfaqbg.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}  
                            onClick={()=>{invert(5);}}  
                        >
                            <p className="text-[rgba(238,236,217,1)] ml-[15px] font-bold text-[13px] tracking-[0.04em] leading-[110.00000000000001%]">IS THERE ACCOMMODATION PROVIDED FOR OUTSTATION PARTICIPANTS AT ALCHERINGA?</p>
                            <img
                                src="/downup.png"
                                alt="toggle"
                                className={`w-[16px] h-[15px] mr-[20px] cursor-pointer transition-transform duration-500 ${
                                    openindex.includes(5) ? "rotate-180" : "rotate-0"
                                }`}
                                onClick={() => invert(5)}
                            />
                        </div>
                        {   <div
                                className={`transition-all w-[340px] h-[132px] max-sm:w-[270px] max-sm:h-[105px] md:w-[65%] md:h-[165px] duration-500 ease-in-out overflow-hidden flex justify-center items-center ${
                                    openindex.includes(5) ? "h-[145px] opacity-100 mt-[-25px] " : "max-h-0 opacity-0"
                                }`}
                                style={{
                                    backgroundImage: "url('/mbfaqansbg.svg')",
                                    //backgroundSize: "contain",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                >
                                <div className="flex justify-center items-center h-[110px]">
                                    <p className="font-normal text-[13px] tracking-[0.02em] leading-[140%] w-[300px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ...
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
});