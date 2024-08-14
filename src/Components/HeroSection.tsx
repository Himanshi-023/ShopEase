import React from "react";

interface HeroSectionProps {
  headingData: {
    name1: string;
    name2: string;
    name3: string;

  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ headingData }) => {   //React.FC<HeroSectionProps>: Specifies that HeroSection is a React functional component with props of type HeroSectionProps.
  const { name1, name2, name3  } = headingData;
  return (
    <>
      <section >
        <div className=" w-[100%] text-center md:text-start relative sm:bg-primary md:pt-20  ">
          <img
            src="images/back2.png"
            className=" hidden md:block w-[100%] lg:h-[600px]  h-[330px]  md:h-[400px] "
            alt=""
          />

         <div className="md:absolute md:top-32 md:left-20  ">
         <p className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:text-white my-2">
            {name1}
          </p>
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl  xl:text-6xl sm:text-white  my-3">
            {name2}
          </p>
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl  xl:text-6xl sm:text-white  animate-bounce  mt-8">
            {name3}
          </p>
          <h1 className="text-xs  lg:text-sm sm:w-[73%] md:w-[33%] lg:w-[40%]  xl:w-[50%]  sm:mx-24  md:mx-0   mt-4 text-gray-600 sm:text-white ">
            Welcome to ShopEase, your ultimate shopping destination. We offer a
            wide range of high-quality products, from the latest fashion and
            gadgets to everyday essentials.
          </h1>
         </div>
        </div>

        <figure className="flex space-x-5">
          <img
            src="/images/HeroGirl.png"
            alt=""
            className="hidden  md:h-[400px] lg:h-[500px] sm:mt-24 md:mt-28 sm:rounded-2xl"
          />
          <img
            src="/images/Heroboy.jpg"
            alt=""
            className="hidden  md:h-[400px] lg:h-[500px] md:rounded-2xl"
          />
        </figure>
      </section>
    </>
  );
};

export default HeroSection;


