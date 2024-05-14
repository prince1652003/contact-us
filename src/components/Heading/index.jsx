import React from "react";

const sizes = {
  s: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  xs: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-anekdevanagari ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
