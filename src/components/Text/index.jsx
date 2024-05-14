import React from "react";

const sizes = {
  xs: "text-[15px] font-medium",
  lg: "text-[21px] font-medium",
  s: "text-lg font-normal",
  "2xl": "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  "3xl": "text-[28px] font-medium md:text-[26px] sm:text-2xl",
  "4xl": "text-[31px] font-medium md:text-[29px] sm:text-[27px]",
  xl: "text-[22px] font-normal",
  md: "text-xl font-light",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-anekdevanagari ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
