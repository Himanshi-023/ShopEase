import React from "react";

interface FormatPriceProps {
    price: number;
  }
  
  const FormatPrice: React.FC<FormatPriceProps> = ({ price }) => {
    return (
      <span>
        {Intl.NumberFormat("en-IN", {    //Intl.NumberFormat is a built-in JavaScript object that provides language-sensitive number formatting. specifies the locale to use for formatting. In this case, it's English as used in India.
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 2,
        }).format(price / 100)}
      </span>
    );
  };


  export default FormatPrice;