import React from "react";
import { NavLink } from "react-router-dom";
interface navigationProps {
  title: string;
}
const PageNavigation:React.FC<navigationProps> = ({ title }) => {
  return (
    <div>
      <NavLink to="/">
        <button className="bg-primary hover:bg-ternary rounded-md py-1.5 px-5">Home</button></NavLink>/{title}
      
    </div>
  );
};

export default PageNavigation;
