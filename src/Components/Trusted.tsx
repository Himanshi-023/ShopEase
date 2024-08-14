import React from "react";

const Trusted: React.FC = () => {
  return (
    <>
      <section className="mt-20 flex flex-col  items-center bg-slate-200/30">
        <div className="">
          <h1 className="font-semibold mt-6">Trusted by 1000+ Companies</h1>
        </div>

        <div className="flex justify-evenly">
          <img src="/images/companylogo-1.png" alt="" className="w-[10%]" />
        
          <img src="/images/companylogo-2.png" alt="" className="w-[10%]" />
          <img src="/images/companylogo-3.png" alt="" className="w-[10%]" />
          <img src="/images/companylogo-4.png" alt="" className="w-[10%]" />
          <img src="/images/companylogo-5.png" alt="" className="w-[10%]" />
        </div>
      </section>
    </>
  );
};

export default Trusted;
